"use server";

import { db , auth } from "@/firebase/admin";

import { cookies } from "next/headers";

// Session duration (1 week)
const SESSION_DURATION = 60 * 60 * 24 * 7;

export async function signUp(params: SignUpParams) {
    const { uid, name, email } = params;

    try {
        
        const  UserRecord = await db.collection('users').doc(uid).get();
        if (UserRecord.exists) {
            return {
                success: false,
                message: 'User already exists',
            };
        }

        await db.collection('users').doc(uid).set({

            name,
            email,
        
        });

        return {
            success: true,
            message: 'User created successfully .Please sign in',
        }
    }catch(e: any) {
        console.error('Error signing up', e);
    if (e.code === 'auth/email-already-in-exits') 
        return {
            success: false,
            message: 'Email already in use',
        };
    }
    return {
        success: false,
        message: 'Failed to sign up',
    };
    }

    export async function signIn(params: SignInParams) {
        const { email, idToken } = params;
      
        try {
          const userRecord = await auth.getUserByEmail(email);
          if (!userRecord)
            return {
              success: false,
              message: "User does not exist. Create an account.",
            };
      
          await setSessionCookie(idToken);
        } catch (e: any) {
          console.log(e);
      
          return {
            success: false,
            message: "Failed to log into account. Please try again.",
          };
        }
      }

      
    export async function setSessionCookie(idToken: string) {
        const cookieStore = await cookies();
      
        // Create session cookie
        const sessionCookie = await auth.createSessionCookie(idToken, {
          expiresIn: SESSION_DURATION * 1000, // milliseconds
        });
      
        // Set cookie in the browser
        cookieStore.set("session", sessionCookie, {
          maxAge: SESSION_DURATION,
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          path: "/",
          sameSite: "lax",
        });
      }
      