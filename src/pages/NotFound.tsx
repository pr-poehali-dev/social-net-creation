
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Страница не найдена</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Извините, запрашиваемая страница не существует или была перемещена.
        </p>
        <Button asChild>
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
