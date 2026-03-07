// সম্পূর্ণ ৫০টি ইস্যু ডেটা
const issuesData = [
    { "id": 1, "title": "Fix navigation menu on mobile devices", "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.", "status": "open", "labels": ["bug", "help wanted"], "priority": "high", "author": "john_doe", "assignee": "jane_smith", "createdAt": "2024-01-15T10:30:00Z" },
    { "id": 2, "title": "Add dark mode support", "description": "Users are requesting a dark mode option. This would improve accessibility and user experience.", "status": "open", "labels": ["enhancement", "good first issue"], "priority": "medium", "author": "sarah_dev", "assignee": "", "createdAt": "2024-01-14T14:20:00Z" },
    { "id": 3, "title": "Update README with installation instructions", "description": "The README file needs better installation instructions for new contributors.", "status": "closed", "labels": ["documentation"], "priority": "low", "author": "mike_docs", "assignee": "sarah_dev", "createdAt": "2024-01-10T08:00:00Z" },
    { "id": 4, "title": "Performance issues with large datasets", "description": "Application becomes slow when loading more than 1000 items. Need to implement pagination or virtual scrolling.", "status": "open", "labels": ["bug", "enhancement"], "priority": "high", "author": "alex_perf", "assignee": "john_doe", "createdAt": "2024-01-18T11:00:00Z" },
    { "id": 5, "title": "Add user authentication system", "description": "Implement JWT-based authentication with login, registration, and password reset functionality.", "status": "open", "labels": ["enhancement"], "priority": "high", "author": "security_sam", "assignee": "john_doe", "createdAt": "2024-01-20T09:00:00Z" },
    { "id": 6, "title": "Fix broken image uploads", "description": "Users are unable to upload images larger than 5MB. Need to increase the file size limit or add compression.", "status": "open", "labels": ["bug"], "priority": "medium", "author": "emma_ui", "assignee": "", "createdAt": "2024-01-19T15:30:00Z" },
    { "id": 7, "title": "Improve search functionality", "description": "Add filters for advanced search including date ranges, status, and tags.", "status": "open", "labels": ["enhancement", "good first issue"], "priority": "low", "author": "search_guru", "assignee": "emma_ui", "createdAt": "2024-01-17T12:00:00Z" },
    { "id": 8, "title": "Database migration fails on production", "description": "The latest migration script fails when running on production database. Works fine locally.", "status": "open", "labels": ["bug"], "priority": "high", "author": "db_admin", "assignee": "alex_perf", "createdAt": "2024-01-21T08:45:00Z" },
    { "id": 9, "title": "Add export to PDF feature", "description": "Users want to export reports and dashboards to PDF format for sharing and printing.", "status": "open", "labels": ["enhancement"], "priority": "medium", "author": "feature_fred", "assignee": "", "createdAt": "2024-01-16T10:15:00Z" },
    { "id": 10, "title": "Update dependencies to latest versions", "description": "Several npm packages are outdated and have security vulnerabilities. Need to update and test.", "status": "closed", "labels": ["documentation"], "priority": "medium", "author": "security_sam", "assignee": "john_doe", "createdAt": "2024-01-05T14:00:00Z" },
    { "id": 11, "title": "Create API documentation", "description": "Generate comprehensive API documentation using Swagger or similar tool.", "status": "open", "labels": ["documentation", "help wanted"], "priority": "medium", "author": "mike_docs", "assignee": "", "createdAt": "2024-01-22T09:30:00Z" },
    { "id": 12, "title": "Footer not displaying correctly on Safari", "description": "The footer overlaps with content on Safari browser. CSS issue with flexbox layout.", "status": "open", "labels": ["bug"], "priority": "low", "author": "browser_bob", "assignee": "emma_ui", "createdAt": "2024-01-18T16:20:00Z" },
    { "id": 13, "title": "Implement real-time notifications", "description": "Add WebSocket support for real-time notifications when issues are updated or commented on.", "status": "open", "labels": ["enhancement"], "priority": "high", "author": "realtime_ron", "assignee": "alex_perf", "createdAt": "2024-01-23T10:00:00Z" },
    { "id": 14, "title": "Add unit tests for authentication module", "description": "Authentication module lacks proper test coverage. Need to add Jest unit tests.", "status": "open", "labels": ["documentation", "good first issue"], "priority": "medium", "author": "test_tina", "assignee": "", "createdAt": "2024-01-12T11:45:00Z" },
    { "id": 15, "title": "Memory leak in dashboard component", "description": "Dashboard component causes memory leak after prolonged use. Need to investigate event listeners and cleanup.", "status": "open", "labels": ["bug"], "priority": "high", "author": "performance_pete", "assignee": "john_doe", "createdAt": "2024-01-24T13:15:00Z" },
    { "id": 16, "title": "Add multi-language support", "description": "Internationalize the application to support multiple languages including Spanish, French, and German.", "status": "open", "labels": ["enhancement"], "priority": "low", "author": "i18n_ivan", "assignee": "", "createdAt": "2024-01-11T09:00:00Z" },
    { "id": 17, "title": "Email notifications not being sent", "description": "Users report not receiving email notifications. SMTP configuration might be incorrect.", "status": "open", "labels": ["bug"], "priority": "high", "author": "mail_mary", "assignee": "security_sam", "createdAt": "2024-01-25T08:30:00Z" },
    { "id": 18, "title": "Refactor user settings page", "description": "User settings page code is messy and hard to maintain. Needs refactoring with better component structure.", "status": "closed", "labels": ["enhancement"], "priority": "medium", "author": "clean_code_carl", "assignee": "emma_ui", "createdAt": "2024-01-08T14:30:00Z" },
    { "id": 19, "title": "Add CSV export functionality", "description": "Allow users to export data tables to CSV format for analysis in spreadsheet applications.", "status": "open", "labels": ["enhancement", "good first issue"], "priority": "low", "author": "data_dan", "assignee": "", "createdAt": "2024-01-26T11:00:00Z" },
    { "id": 20, "title": "Login page shows error on slow connections", "description": "Login page displays timeout error when internet connection is slow. Need better error handling.", "status": "open", "labels": ["bug"], "priority": "medium", "author": "network_nancy", "assignee": "security_sam", "createdAt": "2024-01-13T15:45:00Z" },
    { "id": 21, "title": "Implement two-factor authentication", "description": "Add 2FA support using TOTP for enhanced security on user accounts.", "status": "open", "labels": ["enhancement"], "priority": "high", "author": "security_sam", "assignee": "", "createdAt": "2024-01-27T09:15:00Z" },
    { "id": 22, "title": "Fix chart rendering issues", "description": "Charts don't render correctly when window is resized. Need to add responsive chart logic.", "status": "open", "labels": ["bug"], "priority": "medium", "author": "chart_charlie", "assignee": "emma_ui", "createdAt": "2024-01-14T10:30:00Z" },
    { "id": 23, "title": "Add drag and drop file upload", "description": "Implement drag and drop functionality for file uploads to improve user experience.", "status": "open", "labels": ["enhancement", "good first issue"], "priority": "low", "author": "ux_uma", "assignee": "", "createdAt": "2024-01-28T12:00:00Z" },
    { "id": 24, "title": "API rate limiting not working", "description": "Rate limiting middleware is not properly throttling API requests. Need to debug and fix.", "status": "open", "labels": ["bug"], "priority": "high", "author": "api_adam", "assignee": "alex_perf", "createdAt": "2024-01-29T08:00:00Z" },
    { "id": 25, "title": "Create onboarding tutorial", "description": "New users need a guided tutorial to understand key features. Create interactive onboarding flow.", "status": "open", "labels": ["documentation", "enhancement"], "priority": "medium", "author": "tutorial_tom", "assignee": "mike_docs", "createdAt": "2024-01-15T13:30:00Z" },
    { "id": 26, "title": "Session timeout too aggressive", "description": "Users are being logged out too frequently. Need to adjust session timeout settings.", "status": "closed", "labels": ["bug"], "priority": "medium", "author": "session_steve", "assignee": "security_sam", "createdAt": "2024-01-09T11:00:00Z" },
    { "id": 27, "title": "Add keyboard shortcuts", "description": "Implement keyboard shortcuts for common actions to improve productivity for power users.", "status": "open", "labels": ["enhancement"], "priority": "low", "author": "shortcuts_shawn", "assignee": "", "createdAt": "2024-01-30T10:15:00Z" },
    { "id": 28, "title": "Profile picture upload fails", "description": "Users cannot upload profile pictures. Getting 413 error (payload too large).", "status": "open", "labels": ["bug"], "priority": "medium", "author": "avatar_alice", "assignee": "john_doe", "createdAt": "2024-01-16T14:45:00Z" },
    { "id": 29, "title": "Implement caching strategy", "description": "Add Redis caching for frequently accessed data to improve performance.", "status": "open", "labels": ["enhancement"], "priority": "high", "author": "cache_chris", "assignee": "alex_perf", "createdAt": "2024-01-31T09:30:00Z" },
    { "id": 30, "title": "Fix timezone display issues", "description": "Timestamps are showing in UTC instead of user's local timezone. Need to add timezone conversion.", "status": "open", "labels": ["bug", "good first issue"], "priority": "low", "author": "time_tony", "assignee": "", "createdAt": "2024-01-17T16:00:00Z" },
    { "id": 31, "title": "Add webhook support", "description": "Implement webhooks to allow external services to receive notifications on events.", "status": "open", "labels": ["enhancement"], "priority": "medium", "author": "webhook_wendy", "assignee": "", "createdAt": "2024-02-01T11:20:00Z" },
    { "id": 32, "title": "Accessibility issues with form labels", "description": "Screen readers cannot properly identify form fields. Need to add proper ARIA labels.", "status": "open", "labels": ["bug", "help wanted"], "priority": "medium", "author": "a11y_andy", "assignee": "emma_ui", "createdAt": "2024-01-19T09:45:00Z" },
    { "id": 33, "title": "Add bulk operations support", "description": "Allow users to perform bulk actions like delete, update status on multiple items at once.", "status": "open", "labels": ["enhancement"], "priority": "low", "author": "bulk_barry", "assignee": "", "createdAt": "2024-02-02T10:00:00Z" },
    { "id": 34, "title": "Broken links in documentation", "description": "Several links in the documentation are broken or pointing to outdated pages.", "status": "closed", "labels": ["documentation"], "priority": "low", "author": "link_larry", "assignee": "mike_docs", "createdAt": "2024-01-07T13:15:00Z" },
    { "id": 35, "title": "Add comment system for issues", "description": "Implement a commenting system so users can discuss and collaborate on issues.", "status": "open", "labels": ["enhancement"], "priority": "high", "author": "comment_cathy", "assignee": "john_doe", "createdAt": "2024-02-03T08:30:00Z" },
    { "id": 36, "title": "Password reset email not received", "description": "Users are not receiving password reset emails. Email service might be down or misconfigured.", "status": "open", "labels": ["bug"], "priority": "high", "author": "reset_rita", "assignee": "security_sam", "createdAt": "2024-01-20T15:30:00Z" },
    { "id": 37, "title": "Improve mobile responsiveness", "description": "Several pages are not mobile-friendly. Need to improve responsive design across the application.", "status": "open", "labels": ["bug", "help wanted"], "priority": "medium", "author": "mobile_mike", "assignee": "emma_ui", "createdAt": "2024-02-04T12:45:00Z" },
    { "id": 38, "title": "Add version control for documents", "description": "Implement version history so users can track changes and revert to previous versions.", "status": "open", "labels": ["enhancement"], "priority": "medium", "author": "version_vince", "assignee": "", "createdAt": "2024-01-21T10:15:00Z" },
    { "id": 39, "title": "Fix sorting on data tables", "description": "Column sorting doesn't work correctly for numeric and date columns.", "status": "open", "labels": ["bug", "good first issue"], "priority": "low", "author": "sort_sally", "assignee": "", "createdAt": "2024-02-05T09:00:00Z" },
    { "id": 40, "title": "Implement activity logging", "description": "Add comprehensive activity logs for audit trail and debugging purposes.", "status": "open", "labels": ["enhancement"], "priority": "medium", "author": "logger_leo", "assignee": "alex_perf", "createdAt": "2024-01-22T14:00:00Z" },
    { "id": 41, "title": "Dashboard widgets not loading", "description": "Some dashboard widgets fail to load intermittently. Getting CORS errors in console.", "status": "open", "labels": ["bug"], "priority": "high", "author": "widget_will", "assignee": "john_doe", "createdAt": "2024-02-06T11:30:00Z" },
    { "id": 42, "title": "Add role-based access control", "description": "Implement RBAC system with different permission levels for users, moderators, and admins.", "status": "open", "labels": ["enhancement"], "priority": "high", "author": "rbac_rachel", "assignee": "security_sam", "createdAt": "2024-01-23T08:45:00Z" },
    { "id": 43, "title": "Create docker deployment guide", "description": "Write comprehensive guide for deploying the application using Docker and docker-compose.", "status": "closed", "labels": ["documentation"], "priority": "medium", "author": "docker_dave", "assignee": "mike_docs", "createdAt": "2024-01-06T12:00:00Z" },
    { "id": 44, "title": "Add favorites/bookmarks feature", "description": "Allow users to bookmark frequently accessed pages or items for quick access.", "status": "open", "labels": ["enhancement", "good first issue"], "priority": "low", "author": "fav_frank", "assignee": "", "createdAt": "2024-02-07T10:30:00Z" },
    { "id": 45, "title": "Search results pagination broken", "description": "Pagination controls don't work on search results page. Only first page is accessible.", "status": "open", "labels": ["bug"], "priority": "medium", "author": "page_paul", "assignee": "emma_ui", "createdAt": "2024-01-24T13:45:00Z" },
    { "id": 46, "title": "Implement data backup system", "description": "Set up automated daily backups of database with retention policy and restore procedures.", "status": "open", "labels": ["enhancement"], "priority": "high", "author": "backup_bruce", "assignee": "db_admin", "createdAt": "2024-02-08T09:15:00Z" },
    { "id": 47, "title": "Add code syntax highlighting", "description": "Implement syntax highlighting for code blocks in comments and descriptions.", "status": "open", "labels": ["enhancement", "good first issue"], "priority": "low", "author": "syntax_simon", "assignee": "", "createdAt": "2024-01-25T11:00:00Z" },
    { "id": 48, "title": "Browser console shows warnings", "description": "Multiple deprecation warnings appearing in browser console. Need to update deprecated code.", "status": "open", "labels": ["bug"], "priority": "low", "author": "console_carol", "assignee": "", "createdAt": "2024-02-09T14:20:00Z" },
    { "id": 49, "title": "Add Google Analytics integration", "description": "Integrate Google Analytics to track user behavior and improve product decisions.", "status": "open", "labels": ["enhancement"], "priority": "medium", "author": "analytics_anna", "assignee": "john_doe", "createdAt": "2024-01-26T10:45:00Z" },
    { "id": 50, "title": "Create automated testing pipeline", "description": "Set up CI/CD pipeline with automated tests running on every commit and pull request.", "status": "open", "labels": ["enhancement", "help wanted"], "priority": "high", "author": "ci_cd_cindy", "assignee": "test_tina", "createdAt": "2024-02-10T08:00:00Z" }
];

let activeFilter = 'all';

// --- Authentication ---
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (document.getElementById('username').value === "admin" && 
        document.getElementById('password').value === "admin123") {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('main-dashboard').classList.remove('hidden');
        renderIssues();
    } else {
        alert("ভুল পাসওয়ার্ড বা ইউজারনেম!");
    }
});

// --- Render Cards ---
function renderIssues(status = 'all', searchStr = '') {
    const grid = document.getElementById('issues-grid');
    const loader = document.getElementById('loader');
    
    grid.innerHTML = '';
    loader.classList.remove('hidden');

    setTimeout(() => {
        loader.classList.add('hidden');
        
        const filtered = issuesData.filter(i => {
            const matchesStatus = status === 'all' || i.status === status;
            const matchesSearch = i.title.toLowerCase().includes(searchStr.toLowerCase());
            return matchesStatus && matchesSearch;
        });

        document.getElementById('total-count').innerText = `${filtered.length} Issues`;

        filtered.forEach(issue => {
            const topBorder = issue.status === 'open' ? 'border-emerald-500' : 'border-purple-500';
            const labelHtml = issue.labels.map(l => `<span class="bg-gray-100 text-[9px] px-1.5 py-0.5 rounded border border-gray-200 mr-1 uppercase font-bold text-gray-500">${l}</span>`).join('');
            
            const card = document.createElement('div');
            card.className = `bg-white border-t-4 ${topBorder} rounded-lg shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition cursor-pointer`;
            card.onclick = () => openModal(issue.id);
            
            card.innerHTML = `
                <div>
                    <div class="flex justify-between items-start mb-3">
                        <i class="fa-solid fa-circle-dot ${issue.status === 'open' ? 'text-emerald-500' : 'text-purple-500'} text-xs"></i>
                        <span class="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">${issue.priority}</span>
                    </div>
                    <h3 class="font-bold text-gray-800 text-sm mb-1 leading-snug h-10 overflow-hidden">${issue.title}</h3>
                    <p class="text-[11px] text-gray-500 line-clamp-2 mb-4 h-8">${issue.description}</p>
                    <div class="flex flex-wrap gap-y-1">${labelHtml}</div>
                </div>
                <div class="mt-4 pt-3 border-t border-gray-50 flex justify-between items-center text-[10px] text-gray-400">
                    <span>#${issue.id} by <b>${issue.author}</b></span>
                    <span>${new Date(issue.createdAt).toLocaleDateString()}</span>
                </div>
            `;
            grid.appendChild(card);
        });
    }, 600);
}

// --- Tab Controls ---
function filterIssues(status) {
    activeFilter = status;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active-tab'));
    document.getElementById(`tab-${status}`).classList.add('active-tab');
    renderIssues(status, document.getElementById('search-input').value);
}

// --- Search ---
document.getElementById('search-input').addEventListener('input', (e) => {
    renderIssues(activeFilter, e.target.value);
});

// --- Modal ---
function openModal(id) {
    const issue = issuesData.find(i => i.id === id);
    const body = document.getElementById('modal-body');
    
    body.innerHTML = `
        <h2 class="text-xl font-bold text-gray-900 mb-3">${issue.title}</h2>
        <div class="flex flex-wrap gap-2 mb-5">
            <span class="bg-indigo-50 text-indigo-700 text-[10px] px-2 py-1 rounded font-bold uppercase border border-indigo-100">Status: ${issue.status}</span>
            <span class="bg-orange-50 text-orange-700 text-[10px] px-2 py-1 rounded font-bold uppercase border border-orange-100">Priority: ${issue.priority}</span>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg mb-5">
            <h4 class="text-xs font-bold text-gray-400 uppercase mb-2">Description</h4>
            <p class="text-gray-700 text-sm leading-relaxed">${issue.description}</p>
        </div>
        <div class="grid grid-cols-2 gap-4 text-xs">
            <div class="border-l-2 border-indigo-500 pl-3">
                <p class="text-gray-400 uppercase font-bold mb-1">Author</p>
                <p class="font-semibold text-gray-800">${issue.author}</p>
            </div>
            <div class="border-l-2 border-slate-300 pl-3">
                <p class="text-gray-400 uppercase font-bold mb-1">Assignee</p>
                <p class="font-semibold text-gray-800">${issue.assignee || 'Not Assigned'}</p>
            </div>
            <div class="border-l-2 border-slate-300 pl-3">
                <p class="text-gray-400 uppercase font-bold mb-1">Labels</p>
                <p class="font-semibold text-gray-800">${issue.labels.join(', ')}</p>
            </div>
            <div class="border-l-2 border-slate-300 pl-3">
                <p class="text-gray-400 uppercase font-bold mb-1">Date Created</p>
                <p class="font-semibold text-gray-800">${new Date(issue.createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    `;
    document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}