import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, doc, setDoc, onSnapshot } from 'firebase/firestore';

export const SimplePresenceTest: React.FC = () => {
  const [status, setStatus] = useState<string>('Iniciando teste...');
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const runTest = async () => {
      try {
        setStatus('🔄 Testando conexão básica...');
        
        // Teste 1: Tentar escrever um documento
        const testRef = doc(db, 'user_presence', 'test-user');
        await setDoc(testRef, {
          userId: 'test-user',
          isOnline: true,
          lastSeen: new Date(),
          sessionId: 'test-session',
          updatedAt: new Date()
        });
        
        setStatus('✅ Escrita OK! Configurando listener...');
        
        // Teste 2: Configurar listener
        const presenceRef = collection(db, 'user_presence');
        const unsubscribe = onSnapshot(presenceRef, (snapshot) => {
          const docs = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setData(docs);
          setStatus(`✅ Funcionando! ${docs.length} registros`);
        }, (error) => {
          setStatus(`❌ Erro no listener: ${error.message}`);
        });
        
        return () => unsubscribe();
        
      } catch (error: any) {
        setStatus(`❌ Erro: ${error.message}`);
        console.error('Erro no teste:', error);
      }
    };
    
    runTest();
  }, []);

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 m-4">
      <h3 className="font-bold text-blue-800 mb-2">🧪 Teste Simples de Firebase</h3>
      <div className="text-sm">
        <div className="mb-2">
          <strong>Status:</strong> {status}
        </div>
        <div>
          <strong>Dados ({data.length}):</strong>
          <pre className="bg-white p-2 rounded text-xs overflow-auto max-h-20">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};
