
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarProps {
  src: string;
  alt: string;
  fallback: string;
}

interface AvatarStackedProps {
  avatars: AvatarProps[];
  remainingCount?: number;
  limit?: number;
}

export function AvatarStacked({
  avatars,
  remainingCount = 0,
  limit = 3,
}: AvatarStackedProps) {
  const displayedAvatars = avatars.slice(0, limit);
  
  return (
    <div className="flex -space-x-2">
      {displayedAvatars.map((avatar, index) => (
        <Avatar
          key={index}
          className="border-2 border-background h-8 w-8 md:h-9 md:w-9"
        >
          <AvatarImage src={avatar.src} alt={avatar.alt} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>
      ))}
      {remainingCount > 0 && (
        <div className="flex items-center justify-center h-8 w-8 md:h-9 md:w-9 rounded-full bg-muted text-xs font-medium border-2 border-background">
          +{remainingCount}
        </div>
      )}
    </div>
  );
}

export default AvatarStacked;
