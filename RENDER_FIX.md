# 🔧 Исправление проблемы с yarn/npm в Render

## Проблема

Render использует `yarn` по умолчанию, если нет `package-lock.json`.

## Решение

Мы добавили:

- ✅ `.nvmrc` - указывает версию Node.js 20
- ✅ `.npmrc` - настройки для npm
- ✅ `package-lock.json` - теперь Render будет использовать npm

## Что нужно сделать в Render Dashboard

1. **Откройте ваш сервис** в Render Dashboard
2. Перейдите в **Settings** → **Build & Deploy**
3. Убедитесь, что команды установлены правильно:
   - **Build Command:** `npm ci && npm run build`
   - **Start Command:** `npm run start`
4. **Node Version:** Выберите `20` (или оставьте автоматически)
5. Нажмите **"Save Changes"**
6. **Перезапустите деплой:**
   - Перейдите в **Events**
   - Нажмите **"Manual Deploy"** → **"Deploy latest commit"**

## Альтернатива: Использовать yarn

Если хотите использовать yarn вместо npm:

1. В Render Dashboard → Settings → Build & Deploy
2. Измените команды:
   - **Build Command:** `yarn install && yarn build`
   - **Start Command:** `yarn start`
3. Создайте `yarn.lock`:
   ```bash
   npm install -g yarn
   yarn install
   git add yarn.lock
   git commit -m "Add yarn.lock"
   git push
   ```

## Рекомендация

Используйте npm (как настроено сейчас) - это стандарт для Next.js проектов.
