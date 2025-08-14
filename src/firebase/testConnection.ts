import { db } from './config';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Função para testar a conectividade do Firebase
export const testFirebaseConnection = async () => {
  try {
    console.log('🔥 Testando conexão com Firebase...');
    
    // Tentar criar um documento de teste
    const testDoc = doc(db, 'test', 'connection');
    await setDoc(testDoc, {
      message: 'Teste de conexão',
      timestamp: new Date().toISOString()
    });
    
    console.log('✅ Documento de teste criado com sucesso');
    
    // Tentar ler o documento
    const docSnap = await getDoc(testDoc);
    if (docSnap.exists()) {
      console.log('✅ Documento de teste lido com sucesso:', docSnap.data());
    } else {
      console.log('❌ Documento de teste não encontrado');
    }
    
    return true;
  } catch (error: any) {
    console.error('❌ Erro na conexão com Firebase:', error);
    
    if (error.code === 'permission-denied') {
      console.error('🔒 Erro de permissão - verifique as regras do Firestore');
      console.log(`
📋 SOLUÇÃO: Configure as regras do Firestore no Console Firebase

1. Acesse: https://console.firebase.google.com/project/agenda-8466d/firestore/rules
2. Cole as regras abaixo e publique:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir acesso total temporariamente para desenvolvimento
    match /{document=**} {
      allow read, write: if true;
    }
  }
}

⚠️  IMPORTANTE: Essas são regras para desenvolvimento.
Para produção, use regras mais restritivas.
      `);
    } else if (error.code === 'failed-precondition') {
      console.error('🏗️ Firestore não está configurado - ative no console');
    } else if (error.code === 'unauthenticated') {
      console.error('🔑 Problema de autenticação - verifique as credenciais');
    }
    
    return false;
  }
};
