export interface PacketReceived {
  id: string;
  sessionId: number;
  timestamp: Date;
  inbound: boolean;
  payload: string;
}
