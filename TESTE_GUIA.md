# Guia de Teste - Sistema de Presença em Tempo Real

## Como Testar o Sistema de Presença

### 1. Teste Básico de Login/Logout

1. **Abra a aplicação** em `http://localhost:5174/AgendaDominus/`
2. **Faça login** com qualquer usuário (Tiago, Otávio ou João)
3. **Observe no painel "Equipe"**:
   - O usuário logado deve aparecer como "Online" com ponto verde
   - Outros usuários devem aparecer como "Offline" com ponto cinza
4. **Faça logout** e observe:
   - O usuário deve aparecer como "Offline"
   - Timestamp "última vez visto" deve aparecer

### 2. Teste de Múltiplas Sessões

1. **Abra duas abas/janelas** do navegador
2. **Faça login com usuários diferentes** em cada aba
3. **Observe em tempo real**:
   - Ambos os usuários devem aparecer como "Online"
   - Mudanças devem ser refletidas instantaneamente em ambas as abas
4. **Feche uma das abas** e observe:
   - O usuário da aba fechada deve aparecer como "Offline" na aba restante

### 3. Teste de Detecção de Saída

1. **Faça login** com um usuário
2. **Feche a aba/navegador** bruscamente
3. **Abra novamente** e faça login com outro usuário
4. **Verifique**:
   - O usuário anterior deve aparecer como "Offline"
   - Timestamp de "última vez visto" deve estar atualizado

### 4. Teste de Mudança de Foco (CORRIGIDO)

1. **Faça login** e observe o status "Online"
2. **Mude para outra aba** do navegador (deixe a aplicação em background)
3. **Aguarde alguns segundos** e retorne à aba da aplicação
4. **Observe**:
   - ✅ O status deve **permanecer "Online"** mesmo quando perde o foco
   - ✅ Deve continuar "Online" quando retorna o foco
   - ✅ Só fica "Offline" ao fechar a aba ou fazer logout

### 5. Teste de Tempo Real

1. **Observe o timestamp** no final do painel ("Tempo real • HH:MM:SS")
2. **Aguarde atualizações** em tempo real
3. **Verifique**:
   - O timestamp deve atualizar quando há mudanças de status
   - O contador "X de Y online" deve ser preciso
   - Indicadores visuais devem piscar/animar para usuários online

## Checklist de Funcionalidades

### ✅ Funcionalidades Automáticas
- [ ] Login automático marca usuário como online
- [ ] Logout automático marca usuário como offline  
- [ ] Fechamento de página/navegador marca como offline
- [ ] ✅ **CORRIGIDO**: Usuário permanece online ao mudar de aba
- [ ] Atualizações em tempo real entre diferentes sessões
- [ ] Heartbeat mantém usuários online atualizados (15s - melhorado)

### ✅ Interface Visual
- [ ] Indicador verde animado para usuários online
- [ ] Indicador cinza para usuários offline
- [ ] Texto "Online/Offline" com cores apropriadas
- [ ] "Última vez visto" formatado corretamente
- [ ] Identificação do usuário atual com "(Você)"
- [ ] Contador de usuários online
- [ ] Timestamp de última atualização

### ✅ Dados no Firebase
1. **Acesse o Console do Firebase**
2. **Vá para Firestore Database**
3. **Verifique a coleção `user_presence`**
4. **Confirme os campos**:
   - `userId`: ID do usuário
   - `isOnline`: true/false
   - `lastSeen`: timestamp
   - `sessionId`: ID da sessão
   - `updatedAt`: timestamp de atualização

## Troubleshooting

### Problema: Usuários não aparecem como online
**Solução**:
- Verifique a conexão com Firebase
- Confirme se o usuário está fazendo login corretamente
- Verifique o console do navegador para erros

### Problema: Atualizações não são em tempo real
**Solução**:
- Verifique a conexão de internet
- Confirme as regras de segurança do Firestore
- Verifique se há erros no console relacionados ao onSnapshot

### Problema: Status muda ao trocar de aba
**Solução APLICADA**:
- ✅ Removida detecção de visibilidade da página
- ✅ Removidos listeners de blur/focus
- ✅ Usuário agora permanece online enquanto aba estiver aberta
- ✅ Heartbeat melhorado para 15 segundos

## Console do Navegador

Observe as mensagens no console:
```
Usuário Otávio Laplechade marcado como online
Usuário Otávio Laplechade marcado como offline (página oculta)
```

Essas mensagens confirmam que o sistema está funcionando corretamente.
