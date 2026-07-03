import { login } from './actions'
import { Lock } from 'lucide-react'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const resolvedParams = await searchParams;
  const error = resolvedParams?.error;
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-black/40 border border-white/10 p-8 rounded-2xl shadow-xl">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 text-primary">
            <Lock size={24} />
          </div>
          <h1 className="text-2xl font-bold font-sora tracking-wide">Aura Admin</h1>
          <p className="text-on-background/60 text-sm mt-2 text-center">
            Sign in to access the dashboard
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-lg mb-6 text-center">
            {error}
          </div>
        )}

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-on-background/70 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="admin@example.com"
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:border-white/30 transition-colors text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-on-background/70 mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:border-white/30 transition-colors text-sm"
            />
          </div>
          
          <div className="pt-2">
            <button
              formAction={login}
              className="w-full bg-white text-black font-semibold rounded-lg px-4 py-2.5 hover:bg-gray-200 transition-colors"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
