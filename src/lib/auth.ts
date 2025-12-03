import { jwtVerify, SignJWT } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'eliksir-bar-secret-key-min-32-chars-change-in-prod'
);

const TOKEN_EXPIRY = '7d';

interface UserPayload {
  id: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
}

export async function createAuthToken(payload: UserPayload): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(TOKEN_EXPIRY)
    .sign(JWT_SECRET);
}

export async function verifyAuthToken(token: string): Promise<UserPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as UserPayload;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  
  const token = localStorage.getItem('auth_token');
  if (!token) return false;
  
  // W produkcji tutaj weryfikacja tokenu z backendem
  return true;
}

export function getUserRole(): string | null {
  if (typeof window === 'undefined') return null;
  
  const userData = localStorage.getItem('user_data');
  if (!userData) return null;
  
  try {
    const user = JSON.parse(userData);
    return user.role || null;
  } catch {
    return null;
  }
}

export function requireAuth(requiredRole?: string): boolean {
  if (!isAuthenticated()) {
    window.location.href = '/admin/login';
    return false;
  }
  
  if (requiredRole) {
    const userRole = getUserRole();
    if (userRole !== requiredRole && userRole !== 'admin') {
      window.location.href = '/admin/unauthorized';
      return false;
    }
  }
  
  return true;
}

export function logout(): void {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user_data');
  window.location.href = '/admin/login';
}