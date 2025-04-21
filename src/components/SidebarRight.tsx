
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import AvatarStacked from "./ui/avatar-stacked";

const SidebarRight = () => {
  const friendSuggestions = [
    { name: "Анна Сергеева", avatar: "/placeholder.svg", status: "8 общих друзей" },
    { name: "Иван Петров", avatar: "/placeholder.svg", status: "5 общих друзей" },
    { name: "Мария Иванова", avatar: "/placeholder.svg", status: "2 общих друга" },
  ];

  const eventsData = [
    { title: "Техно-фестиваль", date: "10 июня", participants: 120 },
    { title: "Выставка фотографий", date: "15 июня", participants: 45 },
  ];

  return (
    <div className="w-72 hidden lg:block py-6 px-3 space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Возможные друзья</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {friendSuggestions.map((friend, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={friend.avatar} alt={friend.name} />
                  <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{friend.name}</p>
                  <p className="text-xs text-muted-foreground">{friend.status}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">+</Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Предстоящие события</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {eventsData.map((event, i) => (
            <div key={i} className="mb-2">
              <p className="text-sm font-medium">{event.title}</p>
              <p className="text-xs text-muted-foreground">{event.date}</p>
              <div className="flex items-center justify-between mt-1">
                <AvatarStacked 
                  avatars={[
                    { src: "/placeholder.svg", alt: "User", fallback: "U" },
                    { src: "/placeholder.svg", alt: "User", fallback: "U" },
                    { src: "/placeholder.svg", alt: "User", fallback: "U" }
                  ]}
                  remainingCount={event.participants - 3}
                />
                <Button variant="outline" size="sm" className="text-xs">Интересно</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default SidebarRight;
