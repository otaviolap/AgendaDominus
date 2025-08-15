import React, { useEffect, useState } from 'react';
import { presenceService } from '../firebase/services';
import { testFirebaseConnection } from '../firebase/testConnection';

export const PresenceDebugger: React.FC = () => {
  const [firebaseStatus, setFirebaseStatus] = useState<string>('Testando...');
  const [presenceData, setPresenceData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const runTests = async () => {
      try {
        // Testar conexão Firebase
        console.log('🔧 Iniciando diagnóstico...');
        const connectionOk = await testFirebaseConnection();
        
        if (connectionOk) {
          setFirebaseStatus('✅ Conectado');
          
          // Testar serviço de presença
          console.log('🔧 Testando serviço de presença...');
          
          // Tentar marcar um usuário como online
          await presenceService.setUserOnline('test-user', 'test-session');
          console.log('✅ Usuário teste marcado como online');
          
          // Buscar dados de presença
          const presence = await presenceService.getAllPresence();
          console.log('📊 Dados de presença:', presence);
          setPresenceData(presence);
          
          // Configurar listener em tempo real
          const unsubscribe = presenceService.subscribeToPresence((data) => {
            console.log('🔄 Atualização em tempo real:', data);
            setPresenceData(data);
          });
          
          return () => unsubscribe();
        } else {
          setFirebaseStatus('❌ Falha na conexão');
        }
      } catch (err: any) {
        console.error('❌ Erro no diagnóstico:', err);
        setError(err.message || 'Erro desconhecido');
        setFirebaseStatus('❌ Erro');
      }
    };

    runTests();
  }, []);

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 m-4">
      <h3 className="font-bold text-yellow-800 mb-2">🔧 Diagnóstico de Presença</h3>
      
      <div className="space-y-2 text-sm">
        <div>
          <strong>Status Firebase:</strong> {firebaseStatus}
        </div>
        
        {error && (
          <div className="text-red-600">
            <strong>Erro:</strong> {error}
          </div>
        )}
        
        <div>
          <strong>Dados de Presença ({presenceData.length}):</strong>
          <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto max-h-32">
            {JSON.stringify(presenceData, null, 2)}
          </pre>
        </div>
        
        <div className="text-xs text-gray-600">
          Verifique o console do navegador para mais detalhes
        </div>
      </div>
    </div>
  );
};
