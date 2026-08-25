# Команды для пуша в GitHub

После создания репозитория на GitHub, выполните эти команды:

```bash
cd "c:\washington flipper"

# Добавьте remote (замените YOUR_USERNAME на ваш GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/washington-flipper.git

# Переименуйте ветку в main (если нужно)
git branch -M main

# Запушьте код
git push -u origin main
```

**Или если используете SSH:**

```bash
git remote add origin git@github.com:YOUR_USERNAME/washington-flipper.git
git branch -M main
git push -u origin main
```

После этого код будет на GitHub и готов к деплою на Render!
