
        document.getElementById('btnAgendar').addEventListener('click', function() {
            document.getElementById('modalAgendamento').style.display = 'flex';
        });
        
       
        document.getElementById('closeModal').addEventListener('click', function() {
            document.getElementById('modalAgendamento').style.display = 'none';
        });
        
        
        window.addEventListener('click', function(event) {
            if (event.target === document.getElementById('modalAgendamento')) {
                document.getElementById('modalAgendamento').style.display = 'none';
            }
        });
        
        
        document.getElementById('formAgendamento').addEventListener('submit', function(e) {
            e.preventDefault();
            
           
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const servico = document.getElementById('servico').value;
            const data = document.getElementById('data').value;
            const hora = document.getElementById('hora').value;
            
            console.log('Agendamento:', { nome, telefone, servico, data, hora });
            
            
            alert(`Agendamento confirmado!\n\nNome: ${nome}\nServiço: ${document.getElementById('servico').options[document.getElementById('servico').selectedIndex].text}\nData: ${data} às ${hora}`);
            
            
            this.reset();
            document.getElementById('modalAgendamento').style.display = 'none';
        });