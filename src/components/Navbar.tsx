
import { Link } from "react-router-dom";
import { Home, User, Bell, MessageSquare, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">СоцСеть</span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-center md:justify-end">
          <nav className="flex items-center space-x-1">
            <Button asChild variant="ghost" size="icon">
              <Link to="/">
                <Home className="h-5 w-5" />
                <span className="sr-only">Главная</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link to="/search">
                <Search className="h-5 w-5" />
                <span className="sr-only">Поиск</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link to="/messages">
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">Сообщения</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link to="/notifications">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Уведомления</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="ml-2">
              <Link to="/profile">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="@username" />
                  <AvatarFallback>ЮП</AvatarFallback>
                </Avatar>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
