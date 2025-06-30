import { computed, inject, Injectable, signal } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';
import { SupabaseService } from './supabase/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  usuario = signal<any | null>(null);

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
      this.usuario.set(data.session.user);
      localStorage.setItem('x-token', data.session.access_token);
      localStorage.setItem('email', data.session.user.email ? data.session.user.email : '');
     
    } else {
      // Handle cases where there's no error but also no session
      throw new Error('Login failed: No session data received.');
    }
  }

  async onRegister(email: string, pass: string){
    const { data, error } = await this.supabase().auth.signUp({
      email: email,
      password: pass
    });

    if (error) {
      // This will reject the promise and be caught by the component
      throw error;
    }

    return data;
  }

  async onLogout(){
    const { error } = await this.supabase().auth.signOut();
    if (error) {
      // This will reject the promise and be caught by the component
      throw error;
    }
    this.usuario.set(null);
    localStorage.removeItem('x-token');
    localStorage.removeItem('email');
  }


}
