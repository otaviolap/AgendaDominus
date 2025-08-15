# Sistema de Presença em Tempo Real - AgendaDominus

## Visão Geral

O sistema de presença em tempo real permite que os usuários vejam automaticamente quem está online/offline na equipe, sem necessidade de interação manual.

## Como Funciona

### 1. Marcação Automática de Status

- **Login**: Quando um usuário faz login, ele é automaticamente marcado como "online"
- **Logout**: Quando um usuário faz logout, ele é automaticamente marcado como "offline"
- **Fechamento da Página**: Quando o usuário fecha o navegador/aba, é marcado como "offline"
- **Mudança de Aba**: O usuário permanece "online" mesmo ao mudar de aba (CORRIGIDO)
- **Inatividade Prolongada**: Após 30 minutos sem atividade, pode ser marcado como "offline" (opcional)

**Importante**: O sistema agora mantém o usuário online enquanto a aba estiver aberta, independente de estar em foco ou não.

### 2. Detecção em Tempo Real

- Utiliza Firebase Firestore com listeners em tempo real (`onSnapshot`)
- Atualizações são refletidas instantaneamente em todos os clientes conectados
- Sistema de heartbeat mantém a presença atualizada a cada 15 segundos (melhorado)
- Usuário permanece online enquanto a aba estiver aberta, mesmo sem foco

### 3. Persistência de Dados

- Os dados de presença são armazenados na coleção `user_presence` no Firestore
- Cada registro contém:
  - `userId`: ID do usuário
  - `isOnline`: Status online/offline
  - `lastSeen`: Timestamp da última atividade
  - `sessionId`: ID único da sessão atual
  - `updatedAt`: Timestamp da última atualização

## Arquitetura

### Componentes Principais

1. **presenceService** (`firebase/services.ts`)
   - `setUserOnline()`: Marca usuário como online
   - `setUserOffline()`: Marca usuário como offline
   - `subscribeToPresence()`: Observer em tempo real
   - `getAllPresence()`: Busca todos os status

2. **usePresence** (`hooks/usePresence.ts`)
   - Hook React para gerenciar estado de presença
   - Configura listeners de tempo real
   - Mantém heartbeat para usuários online
   - Detecta saída da página/navegador

3. **useCurrentUserPresence** (`hooks/useCurrentUserPresence.ts`)
   - Hook específico para o usuário atual
   - Gerencia automaticamente login/logout
   - Detecta mudanças de foco/visibilidade da página

4. **UserStatusIndicator** (`components/UserStatusIndicator.tsx`)
   - Componente visual para exibir status da equipe
   - Mostra indicadores visuais de online/offline
   - Exibe "última vez visto" para usuários offline
   - Atualização em tempo real do timestamp

### Integração no App

```tsx
// App.tsx - Gerencia presença do usuário atual automaticamente
useCurrentUserPresence({ 
  currentUser, 
  isLoggedIn: !!currentUser 
});

// Dashboard.tsx - Exibe status da equipe
<UserStatusIndicator 
  users={users} 
  currentUserId={currentUser.id}
/>
```

## Estados de Presença

### Indicadores Visuais

- **Online**: 
  - Ponto verde animado (pulsante)
  - Texto "Online" em verde
  - Avatar com indicador verde

- **Offline**: 
  - Ponto cinza
  - Texto "Offline" + tempo desde última atividade
  - Avatar com indicador cinza

### Formatação de "Última Vez Visto"

- "Agora mesmo" (< 1 minuto)
- "5min atrás" (< 1 hora)
- "2h atrás" (< 24 horas)
- "3d atrás" (≥ 24 horas)

## Configuração Firebase

### Regras de Segurança Sugeridas

```javascript
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir leitura/escrita na coleção de presença
    match /user_presence/{userId} {
      allow read, write: if true; // Ajustar conforme suas regras de autenticação
    }
  }
}
```

### Estrutura da Coleção

```
user_presence/
  {userId}/
    userId: string
    isOnline: boolean
    lastSeen: timestamp
    sessionId: string
    updatedAt: timestamp
```

## Recursos Implementados

✅ Presença automática baseada em login/logout
✅ Detecção de fechamento de página/navegador  
✅ Listeners de tempo real (Firebase onSnapshot)
✅ Sistema de heartbeat (30s)
✅ Formatação inteligente de "última vez visto"
✅ Indicadores visuais animados
✅ Identificação do usuário atual
✅ Contador de usuários online
✅ Timestamp de última atualização

## Melhorias Futuras

- [ ] Detecção de inatividade do usuário
- [ ] Status personalizados (Ocupado, Ausente, etc.)
- [ ] Integração com sistema de notificações
- [ ] Histórico de presença
- [ ] Presença em salas/projetos específicos
