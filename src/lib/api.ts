const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://campblox-production.up.railway.app/api';

export interface Game {
  id: number;
  name: string;
  description: string;
  category: string;
  image_url: string;
  created_at: string;
}

export interface Tournament {
  id: number;
  game_id: number;
  name: string;
  description: string;
  max_participants: number;
  current_participants: number;
  prize_pool: string;
  entry_fee: string;
  start_date: string;
  end_date: string;
  status: 'upcoming' | 'active' | 'completed';
  format: string;
  game_name?: string;
  game_image?: string;
  participants_count?: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

class ApiService {
  private async fetchData<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Cache por 5 minutos
        next: { revalidate: 300 }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiResponse<T> = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'API request failed');
      }

      return data.data;
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      throw error;
    }
  }

  // Games
  async getGames(): Promise<Game[]> {
    return this.fetchData<Game[]>('/games');
  }

  async getGame(id: number): Promise<Game> {
    return this.fetchData<Game>(`/games/${id}`);
  }

  // Tournaments
  async getTournaments(): Promise<Tournament[]> {
    return this.fetchData<Tournament[]>('/tournaments');
  }

  async getTournament(id: number): Promise<Tournament> {
    return this.fetchData<Tournament>(`/tournaments/${id}`);
  }

  // Ranking
  async getRanking(): Promise<any[]> {
    return this.fetchData<any[]>('/ranking');
  }

  // Health check
  async getHealth(): Promise<any> {
    return this.fetchData<any>('/health');
  }
}

export const apiService = new ApiService();
