export interface DashboardStat {

  id: string;

  title: string;

  value: string;

  subtitle: string;

  icon: string;

}

export interface DashboardData {

  stats: DashboardStat[];

}