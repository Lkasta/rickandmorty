# Guia de Commits Convencionais

Este projeto segue o padrão **Conventional Commits** para garantir uma comunicação clara e consistente das mudanças no código. Utilize este guia como referência para escrever mensagens de commit de maneira padronizada.

---

## Formato do Commit

Cada commit deve seguir a estrutura:

`<tipo>[escopo opcional]: <descrição>`

**Exemplo:**  
`feat(login): adiciona validação de senha forte`

---

## Tipos de Commits

### **feat**: Adição de nova funcionalidade  
Use quando uma **nova feature** é adicionada.  
**Exemplo:**  
`feat(landing-page): cria seção de depoimentos`

### **fix**: Correção de bug  
Use quando você **corrigir um erro** no sistema.  
**Exemplo:**  
`fix(api): corrige erro na autenticação JWT`

### **docs**: Mudanças na documentação  
Use para mudanças apenas **na documentação**.  
**Exemplo:**  
`docs(readme): adiciona instruções de instalação`

### **style**: Alterações de estilo (sem impacto na lógica)  
Use para ajustes de **formatação**, como indentação ou espaços.  
**Exemplo:**  
`style(css): ajusta espaçamento em cards`

### **refactor**: Refatoração de código  
Use para **refatorações**, sem adicionar ou corrigir funcionalidades.  
**Exemplo:**  
`refactor(database): melhora queries para performance`

### **perf**: Melhorias de performance  
Use para **otimizações** que melhoram o desempenho.  
**Exemplo:**  
`perf(image-loading): carrega imagens de forma assíncrona`

### **test**: Adição ou alteração de testes  
Use para adicionar ou modificar **testes unitários/integrados**.  
**Exemplo:**  
`test(user-service): adiciona teste para autenticação`

### **build**: Mudanças no sistema de build ou dependências  
Use para mudanças que afetam o **processo de build** ou dependências externas.  
**Exemplo:**  
`build(npm): atualiza dependências do projeto`

### **ci**: Alterações no processo de integração contínua  
Use para mudanças em **scripts e configurações** de CI (ex.: GitHub Actions, Jenkins).  
**Exemplo:**  
`ci(actions): adiciona workflow de lint e testes`

### **chore**: Tarefas menores ou mudanças sem impacto funcional  
Use para tarefas como **atualização de pacotes** ou pequenas mudanças sem impacto direto no código de produção.  
**Exemplo:**  
`chore(lint): ajusta regras de ESLint`

### **revert**: Reverter commit anterior  
Use para **reverter uma alteração** anterior.  
**Exemplo:**  
`revert: feat(api): adiciona endpoint de relatório`

---

## Escopo (Opcional)  
O escopo indica **qual parte do projeto** foi modificada.  
**Exemplo:** `feat(auth):`, `fix(api):`

---

## Regras Adicionais  
1. A **descrição** deve ser clara e objetiva.  
2. Não use ponto final (.) na descrição.  
3. Se necessário, inclua uma mensagem de corpo e/ou _footer_ para mais detalhes.

---

## Exemplo Completo de Commit  
`feat(login): adiciona validação de senha forte`  

Adiciona uma verificação de senha com critérios de complexidade mínima.  
A validação é aplicada no front-end e no back-end.  

**BREAKING CHANGE**: Usuários antigos precisarão redefinir senhas no próximo login.

---

## Benefícios  
- Facilita a **leitura e compreensão** das mudanças.  
- Ajuda na **automação de changelogs**.  
- Torna mais fácil o **debug** de problemas no código.

---

Siga este guia em cada commit para garantir a organização e clareza do histórico do projeto!
