import { User as DefaultUser, Session as DefaultSession, JWT as DefaultJWT } from "next-auth";
import { GuestAccessObject } from "./lib/types";

// Augment next-auth module
declare module "next-auth" {
  // Extend the default User interface
  interface User extends GuestAccessObject {}

  // Extend the default Session interface
  interface Session extends DefaultSession {
    user?: GuestAccessObject;
  }
}

// Augment next-auth/jwt module
declare module "next-auth/jwt" {
  // Extend the default JWT interface
  interface JWT extends DefaultJWT {
    user?: GuestAccessObject;
  }
}