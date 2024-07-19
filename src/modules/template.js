const templates = [
  {
    id: 1,
    name: 'Hyphen Separated Template',
    content: `# MyAwesomeSite
  
  ### Users List
  
  Here is a list of the users on my awesome site:
  
  <ul>
    <% for (var i = 0; i < arrayName.length; i++) { %>
      <li><strong>User ID:</strong> <%= arrayName[i].Identifier %> -- <strong>Name:</strong> <%= arrayName[i]['First name'] %> <%= arrayName[i]['Last name'] %></li>
    <% } %>
  </ul>`,
    preview: `# MyAwesomeSite
  
  ### Users List
  
  Here is a list of the users on my awesome site:
  
  <ul>
    <li><strong>User ID:</strong> 0 -- <strong>Email:</strong> jjb@example.com</li>
    <li><strong>User ID:</strong> 1 -- <strong>Email:</strong> jd@example.com</li>
  </ul>`
  },
  {
    id: 2,
    name: 'Excel-like Table Template',
    content: `# Dynamic User Table
  
  ### Users List
  
  Here is a dynamic table of the users on my awesome site:
  
  <table class="min-w-full bg-white border border-gray-300">
    <thead class="bg-gray-50 border-b">
      <tr>
        <% for (let key in arrayName[0]) { %>
          <th class="py-2 px-4 border-r"><%= key %></th>
        <% } %>
      </tr>
    </thead>
    <tbody>
      <% for (var i = 0; i < arrayName.length; i++) { %>
        <tr class="border-b">
          <% for (let key in arrayName[i]) { %>
            <td class="py-2 px-4 border-r"><%= arrayName[i][key] %></td>
          <% } %>
        </tr>
      <% } %>
    </tbody>
  </table>`,
    preview: `# Dynamic User Table
  
  ### Users List
  
  Here is a dynamic table of the users on my awesome site:
  
  <table class="min-w-full bg-white border border-gray-300">
    <thead class="bg-gray-50 border-b">
      <tr>
        <th class="py-2 px-4 border-r">Username</th>
        <th class="py-2 px-4 border-r">Identifier</th>
        <th class="py-2 px-4 border-r">First name</th>
        <th class="py-2 px-4 border-r">Last name</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b">
        <td class="py-2 px-4 border-r">booker12</td>
        <td class="py-2 px-4 border-r">9012</td>
        <td class="py-2 px-4 border-r">Rachel</td>
        <td class="py-2 px-4 border-r">Booker</td>
      </tr>
      <tr class="border-b">
        <td class="py-2 px-4 border-r">grey07</td>
        <td class="py-2 px-4 border-r">2070</td>
        <td class="py-2 px-4 border-r">Laura</td>
        <td class="py-2 px-4 border-r">Grey</td>
      </tr>
    </tbody>
  </table>`
  },
  {
    id: 3,
    name: 'Dark Theme Table Template',
    content: `# User Data Table
  
  ### User Information
  
  <table class="min-w-full bg-gray-800 text-white">
    <thead class="bg-gray-800">
      <tr>
        <% for (let key in arrayName[0]) { %>
          <th class="py-2 px-4 border-b"><%= key %></th>
        <% } %>
      </tr>
    </thead>
    <tbody>
      <% for (var i = 0; i < arrayName.length; i++) { %>
        <tr class="border-b">
          <% for (let key in arrayName[i]) { %>
            <td class="py-2 px-4"><%= arrayName[i][key] %></td>
          <% } %>
        </tr>
      <% } %>
    </tbody>
  </table>`,
    preview: `# User Data Table
  
  ### User Information
  
  <table class="min-w-full bg-gray-800 text-white">
    <thead class="bg-gray-800">
      <tr>
        <th class="py-2 px-4 border-b">Username</th>
        <th class="py-2 px-4 border-b">Identifier</th>
        <th class="py-2 px-4 border-b">First name</th>
        <th class="py-2 px-4 border-b">Last name</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b">
        <td class="py-2 px-4">booker12</td>
        <td class="py-2 px-4">9012</td>
        <td class="py-2 px-4">Rachel</td>
        <td class="py-2 px-4">Booker</td>
      </tr>
      <tr class="border-b">
        <td class="py-2 px-4">grey07</td>
        <td class="py-2 px-4">2070</td>
        <td class="py-2 px-4">Laura</td>
        <td class="py-2 px-4">Grey</td>
      </tr>
    </tbody>
  </table>`
  },
  {
    id: 4,
    name: 'Blue Theme Table Template',
    content: `# User Data Table
  
  ### User Information
  
  <table class="min-w-full bg-blue-50 text-black border">
    <thead class="bg-blue-600 text-white">
      <tr>
        <% for (let key in arrayName[0]) { %>
          <th class="py-2 px-4 border-b"><%= key %></th>
        <% } %>
      </tr>
    </thead>
    <tbody>
      <% for (var i = 0; i < arrayName.length; i++) { %>
        <tr class="border-b">
          <% for (let key in arrayName[i]) { %>
            <td class="py-2 px-4"><%= arrayName[i][key] %></td>
          <% } %>
        </tr>
      <% } %>
    </tbody>
  </table>`,
    preview: `# User Data Table
  
  ### User Information
  
  <table class="min-w-full bg-blue-50 text-black borde">
    <thead class="bg-blue-600 text-white">
      <tr>
        <th class="py-2 px-4 border-b">Username</th>
        <th class="py-2 px-4 border-b">Identifier</th>
        <th class="py-2 px-4 border-b">First name</th>
        <th class="py-2 px-4 border-b">Last name</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b">
        <td class="py-2 px-4">booker12</td>
        <td class="py-2 px-4">9012</td>
        <td class="py-2 px-4">Rachel</td>
        <td class="py-2 px-4">Booker</td>
      </tr>
      <tr class="border-b">
        <td class="py-2 px-4">grey07</td>
        <td class="py-2 px-4">2070</td>
        <td class="py-2 px-4">Laura</td>
        <td class="py-2 px-4">Grey</td>
      </tr>
    </tbody>
  </table>`
  },
  {
    id: 5,
    name: 'Green Theme Table Template',
    content: `# User Data Table
  
  ### User Information
  
  <table class="min-w-full bg-green-50 text-black border">
    <thead class="bg-green-600">
      <tr>
        <% for (let key in arrayName[0]) { %>
          <th class="py-2 px-4 border-b"><%= key %></th>
        <% } %>
      </tr>
    </thead>
    <tbody>
      <% for (var i = 0; i < arrayName.length; i++) { %>
        <tr class="border-b">
          <% for (let key in arrayName[i]) { %>
            <td class="py-2 px-4"><%= arrayName[i][key] %></td>
          <% } %>
        </tr>
      <% } %>
    </tbody>
  </table>`,
    preview: `# User Data Table
  
  ### User Information
  
  <table class="min-w-full bg-green-50 text-black border">
    <thead class="bg-green-600 text-white">
      <tr>
        <th class="py-2 px-4 border-b">Username</th>
        <th class="py-2 px-4 border-b">Identifier</th>
        <th class="py-2 px-4 border-b">First name</th>
        <th class="py-2 px-4 border-b">Last name</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b">
        <td class="py-2 px-4">booker12</td>
        <td class="py-2 px-4">9012</td>
        <td class="py-2 px-4">Rachel</td>
        <td class="py-2 px-4">Booker</td>
      </tr>
      <tr class="border-b">
        <td class="py-2 px-4">grey07</td>
        <td class="py-2 px-4">2070</td>
        <td class="py-2 px-4">Laura</td>
        <td class="py-2 px-4">Grey</td>
      </tr>
    </tbody>
  </table>`
  },
  {
    id: 6,
    name: 'Red Theme Table Template',
    content: `# User Data Table
  
  ### User Information
  
  <table class="min-w-full bg-red-50 text-black border">
    <thead class="bg-red-600 text-white">
      <tr>
        <% for (let key in arrayName[0]) { %>
          <th class="py-2 px-4 border-b"><%= key %></th>
        <% } %>
      </tr>
    </thead>
    <tbody>
      <% for (var i = 0; i < arrayName.length; i++) { %>
        <tr class="border-b">
          <% for (let key in arrayName[i]) { %>
            <td class="py-2 px-4"><%= arrayName[i][key] %></td>
          <% } %>
        </tr>
      <% } %>
    </tbody>
  </table>`,
    preview: `# User Data Table
  
  ### User Information
  
  <table class="min-w-full bg-red-50 text-blackborder">
    <thead class="bg-red-600 text-white">
      <tr>
        <th class="py-2 px-4 border-b">Username</th>
        <th class="py-2 px-4 border-b">Identifier</th>
        <th class="py-2 px-4 border-b">First name</th>
        <th class="py-2 px-4 border-b">Last name</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b">
        <td class="py-2 px-4">booker12</td>
        <td class="py-2 px-4">9012</td>
        <td class="py-2 px-4">Rachel</td>
        <td class="py-2 px-4">Booker</td>
      </tr>
      <tr class="border-b">
        <td class="py-2 px-4">grey07</td>
        <td class="py-2 px-4">2070</td>
        <td class="py-2 px-4">Laura</td>
        <td class="py-2 px-4">Grey</td>
      </tr>
    </tbody>
  </table>`
  }
]

export function getTemplates() {
  return templates
}

export function getTemplateById(templateId) {
  return templates.find((template) => template.id === templateId)
}

export function unescape(html) {
  return html
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
}

export function replaceNops(html) {
  return html.replace(/<nop>/g, '').replace(/<\/nop>/g, '')
}
