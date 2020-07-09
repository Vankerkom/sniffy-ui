export interface Packet {
  id: string;
  sessionId: number;
  timestamp: Date;
  inbound: boolean;
  payload: string;
}
