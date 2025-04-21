
import { Link } from "react-router-dom";
import { 
  Home, 
  User, 
  Users, 
  Settings, 
  BookMarked, 
  Image, 
  Video
} from "lucide-react";

const SidebarLeft = () => {
  return (
    <div className="h-screen sticky top-0 w-64 hidden md:block py-6 px-3 border-r">
      <div className="mb-6 px-3">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">СоцСеть</span>
        </Link>
      </div>
      
      <nav className="space-y-1">
        <SidebarItem href="/" icon={<Home className="mr-2 h-4 w-4" />} text="Главная" />
        <SidebarItem href="/profile" icon={<User className="mr-2 h-4 w-4" />} text="Профиль" />
        <SidebarItem href="/friends" icon={<Users className="mr-2 h-4 w-4" />} text="Друзья" />
        <SidebarItem href="/photos" icon={<Image className="mr-2 h-4 w-4" />} text="Фото" />
        <SidebarItem href="/videos" icon={<Video className="mr-2 h-4 w-4" />} text="Видео" />
        <SidebarItem href="/saved" icon={<BookMarked className="mr-2 h-4 w-4" />} text="Сохраненное" />
        <SidebarItem href="/settings" icon={<Settings className="mr-2 h-4 w-4" />} text="Настройки" />
      </nav>
    </div>
  );
};

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

const SidebarItem = ({ href, icon, text }: SidebarItemProps) => {
  return (
    <Link
      to={href}
      className="flex items-center px-3 py-2 hover:bg-muted rounded-md transition-colors"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default SidebarLeft;
