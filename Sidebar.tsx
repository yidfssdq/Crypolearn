import { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Lock, User, LogOut } from 'lucide-react';
import { isLessonCompleted } from '@/utils/progressSync';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCategories } from '@/data/translations';
import { fundamentalsChapters } from '@/data/fundamentals';
import { lessons } from '@/data/courses';
import { enLessons } from '@/data/englishLessons';

interface UserProfile {
  username: string;
  avatar_url: string | null;
}

export function Sidebar() {
  const location = useLocation();
  const { language, t } = useLanguage();
  const categories = getCategories(language);
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    basics: true,
    technical: false,
    fundamental: false,
    strategies: false,
    misc: false
  });

  useEffect(() => {
    checkUser();
    loadCompletedLessons();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        loadProfile(session.user.id);
        loadCompletedLessons();
      } else {
        setProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadCompletedLessons = async () => {
    const allLessons = categories.flatMap(cat => cat.lessons);
    const completed = [];
    for (const lessonId of allLessons) {
      if (await isLessonCompleted(lessonId)) {
        completed.push(lessonId);
      }
    }
    setCompletedLessons(completed);
  };

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
    if (user) {
      loadProfile(user.id);
    }
  };

  const loadProfile = async (userId: string) => {
    const { data } = await supabase
      .from('profiles')
      .select('username, avatar_url')
      .eq('id', userId)
      .single();
    
    if (data) {
      setProfile(data);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success(t('profile.logout'));
  };

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border h-screen sticky top-0 overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <NavLink to="/" className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center glow-primary">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">CryptoLearn</h1>
            <p className="text-xs text-muted-foreground">Hub</p>
          </div>
        </NavLink>

        {/* Auth Section */}
        {user && profile ? (
          <div className="space-y-3">
            <Link to="/profile">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-sidebar-accent cursor-pointer transition-smooth">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-sidebar-foreground truncate">
                    {profile.username}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Profil
                  </p>
                </div>
              </div>
            </Link>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="w-full"
            >
              <LogOut className="w-4 h-4 mr-2" />
              {t('profile.logout')}
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <Link to="/auth">
              <Button className="w-full gradient-primary text-sm">
                Inscription
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="outline" className="w-full text-sm">
                Connexion
              </Button>
            </Link>
          </div>
        )}
      </div>

      
{/* Navigation */}
<nav className="p-4 space-y-3">
  {/* MODULE 1 - Fondamentaux */}
  <Collapsible>
    <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 rounded-lg bg-sidebar-accent hover:bg-sidebar-accent/70 transition-smooth text-sm">
      <span className="font-semibold">🎓 MODULE 1 — Les Fondamentaux de la Crypto</span>
      <ChevronDown className="w-4 h-4" />
    </CollapsibleTrigger>
    <CollapsibleContent className="mt-2 space-y-2">
      {fundamentalsChapters.map((chapter) => (
        <Collapsible key={chapter.id}>
          <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-sidebar-accent/50 transition-smooth text-sm">
            <span className="flex items-center gap-2"><span>{chapter.icon}</span><span>{chapter.name}</span></span>
            <ChevronDown className="w-4 h-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-1">
            <ul className="space-y-1 ml-2">
              {chapter.lessons.map((lessonId) => (
                <li key={lessonId}>
                  <NavLink
                    to={`/lesson/${lessonId}`}
                    className={({ isActive }) => cn(
                      "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-sidebar-accent focus:outline-none focus:ring-2 focus:ring-primary transition-smooth text-sm",
                      isActive && "bg-sidebar-accent text-sidebar-foreground"
                    )}
                  >
                    <span className="w-2 h-2 rounded-full bg-primary/70" aria-hidden></span>
                    <span className="truncate">
                      {(language === 'en' ? (enLessons[lessonId]?.title ?? lessons[lessonId]?.title) : lessons[lessonId]?.title) || lessonId}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </CollapsibleContent>
  </Collapsible>

  {/* MODULE 2 - Crypto Pro */}
  <Collapsible defaultOpen>
    <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 rounded-lg bg-sidebar-accent hover:bg-sidebar-accent/70 transition-smooth">
      <span className="font-semibold">🚀 MODULE 2 — Crypto Pro : Pratique, Trading & Stratégies</span>
      <ChevronDown className="w-4 h-4" />
    </CollapsibleTrigger>
    <CollapsibleContent className="mt-2 space-y-2">
      {getCategories(language).map((category) => {
        const hasActiveLesson = category.lessons.some(lessonId => location.pathname === `/lesson/${lessonId}`);
        return (
          <Collapsible key={category.id} open={openCategories[category.id] || hasActiveLesson} onOpenChange={(open) => setOpenCategories(prev => ({ ...prev, [category.id]: open }))}>
            <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-sidebar-accent/50 transition-smooth text-sm">
              <span className="flex items-center gap-2"><span>{category.icon}</span><span>{category.name}</span></span>
              <ChevronDown className={cn("w-4 h-4 transition-transform",(openCategories[category.id] || hasActiveLesson) && "rotate-180")} />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-1">
              <ul className="space-y-1 ml-2">
                {category.lessons.map((lessonId) => (
                  <li key={lessonId}>
                    <NavLink
                      to={`/lesson/${lessonId}`}
                      className={({ isActive }) => cn(
                        "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-sidebar-accent focus:outline-none focus:ring-2 focus:ring-primary transition-smooth text-sm",
                        isActive && "bg-sidebar-accent text-sidebar-foreground"
                      )}
                    >
                      <span className="w-2 h-2 rounded-full bg-primary/70" aria-hidden></span>
                      <span className="truncate">
                        {(language === 'en' ? (enLessons[lessonId]?.title ?? lessons[lessonId]?.title) : lessons[lessonId]?.title) || lessonId}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        );
      })}
    </CollapsibleContent>
  </Collapsible>
</nav>

    </aside>
  );
}
