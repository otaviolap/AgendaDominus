# 🚀 Como Publicar o Agenda Dominus no GitHub Pages

## Método 1: Deploy Automático com GitHub Actions (Recomendado)

### Passo 1: Configurar o Repositório
1. Vá para o seu repositório no GitHub: `https://github.com/otaviolap/AgendaDominus`
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione **GitHub Actions**

### Passo 2: Fazer Push do Código
```bash
git add .
git commit -m "Configuração para GitHub Pages"
git push origin main
```

### Passo 3: Verificar o Deploy
- Vá para a aba **Actions** no seu repositório
- Você verá um workflow rodando chamado "Deploy to GitHub Pages"
- Aguarde ele finalizar (uns 2-3 minutos)
- Sua página estará disponível em: `https://otaviolap.github.io/AgendaDominus/`

---

## Método 2: Deploy Manual com gh-pages

### Comando para Deploy Manual:
```bash
npm run deploy
```

Este comando irá:
1. Fazer o build da aplicação
2. Criar/atualizar a branch `gh-pages`
3. Fazer push dos arquivos buildados

---

## 🔧 Configurações Importantes

### Firebase (IMPORTANTE!)
⚠️ **Atenção**: Para funcionar no GitHub Pages, você precisará:

1. **Configurar domínio no Firebase Console:**
   - Vá para Firebase Console > Authentication > Settings
   - Adicione `otaviolap.github.io` aos domínios autorizados

2. **Atualizar regras do Firestore** (se necessário):
   - Certifique-se que as regras permitem acesso do novo domínio

### Base URL
✅ Já configurado no `vite.config.ts`:
```typescript
base: '/AgendaDominus/'
```

### Build
✅ Scripts já configurados no `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

---

## 🎯 Resultado Final

Após o deploy, sua aplicação estará disponível em:
**https://otaviolap.github.io/AgendaDominus/**

---

## 🔄 Atualizações Futuras

Para atualizar a página:
1. Faça suas alterações no código
2. Commit e push para `main`
3. O GitHub Actions fará o deploy automaticamente

Ou use o deploy manual:
```bash
npm run deploy
```

---

## 🐛 Solução de Problemas

### Se o Firebase não funcionar:
1. Verifique os domínios autorizados no Firebase Console
2. Confirme as regras do Firestore
3. Verifique se as chaves de API estão corretas

### Se a página não carregar:
1. Verifique se o repositório é público
2. Confirme se GitHub Pages está habilitado
3. Aguarde alguns minutos após o deploy

### Para ver logs de erro:
1. Abra o DevTools (F12)
2. Vá para a aba Console
3. Procure por erros em vermelho
