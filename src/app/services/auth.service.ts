import { computed, inject, Injectable, signal } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';
import { SupabaseService } from './supabase/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  login = signal<any | null>(null);

  private supabaseS = inject(SupabaseService);
  private supabase = computed<SupabaseClient>(()=> this.supabaseS.getClient());

  constructor() { }

  //token 1hours
  async onLogin(email: string, pass: string) {
    const { data, error } = await this.supabase().auth.signInWithPassword({
      email: email,
      password: pass
    });

    if (error) {
      // This will reject the promise and be caught by the component
      throw error;
    }

    if (data.session) {
      this.login.set(data.session.user);
      localStorage.setItem('x-token', data.session.access_token);
      localStorage.setItem('email', data.session.user.email ? data.session.user.email : '');
      console.log("token (1hours): " + data.session.access_token);
    } else {
      // Handle cases where there's no error but also no session
      throw new Error('Login failed: No session data received.');
    }
  }


}
