export interface WaitlistSubmission {
  id: string;
  name: string;
  email: string;
  interest: 'sangat_tertarik' | 'tertarik' | 'mungkin' | 'kurang_tertarik' | 'tidak_tertarik';
  createdAt: string;
}

export interface ReviewRating {
  rating: number;
  userName: string;
  comment: string;
  avatarUrl?: string;
}
