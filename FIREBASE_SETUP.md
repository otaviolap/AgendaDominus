# Configuração do Firebase - Regras de Segurança

## ⚠️ PROBLEMA MAIS COMUM: Permission Denied

Se o sistema de presença não estiver funcionando, o problema mais provável são as regras de segurança do Firestore.

## 🔧 Como Configurar as Regras:

### 1. Acesse o Console do Firebase
- Vá para: https://console.firebase.google.com/project/agenda-8466d/firestore/rules

### 2. Substitua as regras atuais por:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir acesso completo para desenvolvimento
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

### 3. Clique em "Publicar"

## 🧪 Como Testar se Funcionou:

1. **Abra o console do navegador** (F12)
2. **Faça login** na aplicação
3. **Procure por estas mensagens**:
   ```
   🔧 Configurando listener de presença...
   🟢 Marcando usuário como online...
   ✅ Usuário marcado como online
   📊 Snapshot recebido com X documentos
   ```

4. **Se aparecer erro de permissão**:
   ```
   ❌ permission-denied
   ```
   Significa que as regras do Firestore ainda não foram configuradas corretamente.

## 📊 Verificar Dados no Firestore:

1. **Acesse**: https://console.firebase.google.com/project/agenda-8466d/firestore/data
2. **Procure pela coleção**: `user_presence`
3. **Deve aparecer documentos** com os dados dos usuários online

## 🔍 Outros Problemas Possíveis:

### Conexão com Internet
- Verifique se tem conexão com a internet
- Teste em: https://firebase.google.com/

### Configuração do Projeto
- Verifique se o `projectId` em `firebase/config.ts` está correto: `agenda-8466d`

### Cache do Navegador
- Tente fazer hard refresh: `Ctrl+Shift+R`
- Ou abra em aba anônima

## 🆘 Se Ainda Não Funcionar:

1. **Abra o console do navegador**
2. **Copie TODOS os erros** que aparecem
3. **Procure especialmente por**:
   - `permission-denied`
   - `network-request-failed`
   - `invalid-argument`

As mensagens de erro irão indicar exatamente qual é o problema!
