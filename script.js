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

let currentFilter = 'all';

// --- অগ্রাধিকার (Priority) অনুযায়ী কালার স্টাইল ---
function getPriorityStyle(priority) {
    const p = priority.toLowerCase();
    if (p === 'high') return 'bg-[#FEE2E2] text-[#EF4444] border-[#FECACA]'; // লাল
    if (p === 'medium') return 'bg-[#FFEDD5] text-[#F97316] border-[#FED7AA]'; // কমলা
    if (p === 'low') return 'bg-[#F3F4F6] text-[#6B7280] border-[#E5E7EB]'; // ধূসর
    return 'bg-gray-100 text-gray-500 border-gray-200';
}

// --- লেবেল (BUG, HELP WANTED) অনুযায়ী কালার স্টাইল ---
function getLabelStyle(label) {
    const l = label.toUpperCase();
    if (l === 'BUG') return 'bg-[#FEE2E2] text-[#E11D48] border-[#FECACA]'; // গাঢ় লাল
    if (l === 'HELP WANTED') return 'bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]'; // হলুদ
    if (l === 'ENHANCEMENT') return 'bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]'; // সবুজ
    return 'bg-gray-50 text-gray-500 border-gray-100';
}

// --- লগইন হ্যান্ডলার ---
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === "admin" && pass === "admin123") {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('main-dashboard').classList.remove('hidden');
        renderIssues();
    } else {
        alert("Invalid Username or Password!");
    }
});

// --- ড্যাশবোর্ড রেন্ডারিং ---
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
            const topBorder = issue.status === 'open' ? 'border-[#10B981]' : 'border-[#8B5CF6]';
            const statusIcon = issue.status === 'open' ? 'assets/Open-Status.png' : 'assets/Closed-Status.png';
            
            const priorityClass = getPriorityStyle(issue.priority);
            
            const labelHtml = issue.labels.map(l => {
                const labelClass = getLabelStyle(l);
                return `<span class="${labelClass} text-[9px] px-2 py-0.5 rounded-full border mr-1 uppercase font-bold tracking-tight">
                            <i class="fa-solid fa-tag mr-1 opacity-70"></i>${l}
                        </span>`;
            }).join('');
            
            const card = document.createElement('div');
            card.className = `bg-white border-t-4 ${topBorder} rounded-xl shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition-all cursor-pointer group`;
            card.onclick = () => openModal(issue.id);
            
            card.innerHTML = `
                <div>
                    <div class="flex justify-between items-center mb-4">
                        <div class="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 shadow-inner">
                            <img src="${statusIcon}" alt="status" class="w-3.5 h-3.5 object-contain">
                        </div>
                        <span class="${priorityClass} text-[9px] px-2.5 py-1 rounded font-black uppercase tracking-widest border shadow-sm">${issue.priority}</span>
                    </div>
                    <h3 class="font-bold text-[#111827] text-sm mb-1 leading-snug group-hover:text-[#4F46E5] transition-colors line-clamp-2">${issue.title}</h3>
                    <p class="text-[11px] text-gray-500 line-clamp-2 mb-4 leading-relaxed">${issue.description}</p>
                    <div class="flex flex-wrap gap-y-1 mb-2">${labelHtml}</div>
                </div>
                
                <div class="mt-4 pt-3 border-t border-gray-50 flex flex-col gap-0.5 text-[10px] font-medium">
                    <span class="text-gray-500">#${issue.id} by <b class="text-gray-700">${issue.author}</b></span>
                    <span class="text-gray-400">${new Date(issue.createdAt).toLocaleDateString('en-US')}</span>
                </div>
            `;
            grid.appendChild(card);
        });
    }, 400);
}

// --- ফিল্টার এবং সার্চ ---
function filterIssues(status) {
    currentFilter = status;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active-tab'));
    document.getElementById(`tab-${status}`).classList.add('active-tab');
    renderIssues(status, document.getElementById('search-input').value);
}

document.getElementById('search-input').addEventListener('input', (e) => {
    renderIssues(currentFilter, e.target.value);
});

// --- মডাল (Popup) ওপেন ---
function openModal(id) {
    const issue = issuesData.find(i => i.id === id);
    const body = document.getElementById('modal-body');
    const priorityClass = getPriorityStyle(issue.priority);
    
    body.innerHTML = `
        <div class="text-left">
            <h2 class="text-xl font-bold text-gray-900 mb-2">${issue.title}</h2>
            <div class="flex items-center gap-2 mb-4">
                <span class="${issue.status === 'open' ? 'bg-[#10B981]' : 'bg-[#8B5CF6]'} text-white text-[10px] px-2.5 py-1 rounded-full font-bold">
                    ${issue.status === 'open' ? 'Opened' : 'Closed'}
                </span>
                <span class="text-gray-400 text-[11px]">• Opened by <b class="text-gray-600">${issue.author}</b> • ${new Date(issue.createdAt).toLocaleDateString('en-US')}</span>
            </div>
            
            <div class="flex flex-wrap gap-2 py-3 border-y border-gray-100 mb-4">
                ${issue.labels.map(l => `<span class="${getLabelStyle(l)} text-[9px] px-2.5 py-1 rounded-full border font-bold uppercase"># ${l}</span>`).join('')}
            </div>

            <p class="text-gray-600 text-sm mb-6 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                ${issue.description}
            </p>

            <div class="grid grid-cols-2 gap-4">
                <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <p class="text-[9px] text-gray-400 uppercase font-bold mb-1">Assignee</p>
                    <p class="font-bold text-gray-800 text-sm">${issue.assignee || 'Unassigned'}</p>
                </div>
                <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <p class="text-[9px] text-gray-400 uppercase font-bold mb-1">Priority</p>
                    <span class="${priorityClass} text-[9px] px-2 py-0.5 rounded font-black uppercase border shadow-sm">${issue.priority}</span>
                </div>
            </div>
        </div>
    `;
    document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}