import { useState, useEffect } from 'react';
import { getProgress, getCompletionPercentage, getTotalScore } from '@/utils/progressSync';
import { Trophy, Star, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { UserProgress } from '@/types/course';

export function ProgressBar() {
  const [progress, setProgress] = useState<UserProgress>({ completedLessons: [], quizScores: {}, level: 'Débutant' });
  const [percentage, setPercentage] = useState(0);
  const [avgScore, setAvgScore] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const loadData = async () => {
      const prog = await getProgress();
      const perc = await getCompletionPercentage();
      const score = await getTotalScore();
      setProgress(prog);
      setPercentage(perc);
      setAvgScore(score);
    };
    loadData();
  }, []);

  const getLevelColor = () => {
    switch (progress.level) {
      case 'Expert':
        return 'text-success';
      case 'Intermédiaire':
        return 'text-secondary';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">{t('stats.progress')}</h3>
        </div>
        <span className={`text-sm font-medium ${getLevelColor()}`}>
          {t('stats.level')} : {progress.level}
        </span>
      </div>

      {/* Main progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>{progress.completedLessons.length}/18 {t('stats.lessons')}</span>
          <span>{percentage}%</span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full gradient-primary transition-smooth glow-primary"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">{t('stats.score')}</p>
            <p className="font-semibold">{avgScore}%</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-secondary" />
          <div>
            <p className="text-xs text-muted-foreground">{t('stats.goal')}</p>
            <p className="font-semibold">100%</p>
          </div>
        
        {/* Extra stats */}
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="p-3 rounded-lg bg-muted/40">
            <p className="text-muted-foreground">{t('stats.completedLessons') || 'Leçons terminées'}</p>
            <p className="font-semibold">{progress.completedLessons.length}</p>
          </div>
          <div className="p-3 rounded-lg bg-muted/40">
            <p className="text-muted-foreground">{t('stats.avgScore') || 'Score moyen'}</p>
            <p className="font-semibold">{avgScore}%</p>
          </div>
        </div>
        {/* Last quizzes (up to 5) */}
        <div className="mt-4">
          <p className="text-xs text-muted-foreground mb-2">{t('stats.recentQuizzes') || 'Derniers quiz'}</p>
          <div className="space-y-1">
            {Object.entries(progress.quizScores).slice(-5).map(([id, sc]) => (
              <div key={id} className="flex items-center justify-between text-xs">
                <span className="truncate max-w-[60%]">{id}</span>
                <span className="font-medium">{sc}%</span>
              </div>
            ))}
            {Object.keys(progress.quizScores).length === 0 && (
              <p className="text-xs text-muted-foreground">Aucun quiz passé pour le moment.</p>
            )}
          </div>
        </div>
</div>
      </div>
    </div>
  );
}
