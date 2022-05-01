import {
  badge_1,
  badge_2,
  badge_4,
  badge_5,
  badge_6,
  badge_11,
  badge_14,
  placeholder,
} from "./Badges/badges";

export const allBadges = [
  { name: "first", badge: badge_1 },
  { name: "second", badge: badge_2 },
  { name: "third", badge: badge_4 },
  { name: "fourth", badge: badge_5 },
  { name: "fifth", badge: badge_6 },
  { name: "sixth", badge: badge_11 },
  { name: "seventh", badge: badge_14 },
  { name: "", badge: placeholder },
  { name: "", badge: placeholder },
  { name: "", badge: placeholder },
  { name: "", badge: placeholder },
  { name: "", badge: placeholder },
  { name: "", badge: placeholder },
  { name: "", badge: placeholder },
  { name: "", badge: placeholder },
  { name: "", badge: placeholder },
  { name: "", badge: placeholder },
  { name: "", badge: placeholder },
  { name: "", badge: placeholder },
  { name: "", badge: placeholder },
];

export const achievements = allBadges.filter((badge) => badge.name !== "");
