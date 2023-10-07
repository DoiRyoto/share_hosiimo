export interface UserProfile {
  id: string;
  name: string;
  displayName: string;
  email: string;
  avatarUrl: string;
  onboarded: boolean;
}

export interface FriendProfile {
  id: string;
  displayName: string;
  avatarUrl: string;
}

export interface ItemInterface {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  createAt: Date;
  createBy: string;
  alreadyBuy: boolean;
}

export interface GroupInterface {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  createdAt: Date;
  createdBy: string;
}

export interface GroupMemberInterface {
  id: string;
  role: string;
}