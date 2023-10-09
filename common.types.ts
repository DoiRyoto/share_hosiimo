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
  createAt: string;
  createBy: string;
  alreadyBuy: boolean;
}

export interface ItemListInterface {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  createAt: string;
  createBy: string;
}

export interface GroupInterface {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  createdAt: string;
  createdBy: string;
}

export interface GroupMemberInterface {
  id: string;
  role: string;
}