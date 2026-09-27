(function() {
        const authNavContainer = document.getElementById('authNavContainer');

        // Check login state and update navbar
        function updateNavbar() {
            const loggedIn = localStorage.getItem('fandomLoggedIn') === 'true';
            const username = localStorage.getItem('fandomUsername') || 'User';

            if (loggedIn) {
                // Show user badge with logout button
                authNavContainer.innerHTML = `
                    <div class="user-badge">
                        <span class="username">
                            <i class="fa-regular fa-user"></i>${username}
                        </span>
                        <button class="logout-btn" id="logoutBtn">
                            Logout
                        </button>
                    </div>
                `;

                // Attach logout handler
                const logoutBtn = document.getElementById('logoutBtn');
                if (logoutBtn) {
                    logoutBtn.addEventListener('click', function(e) {
                        e.preventDefault();

                        // Clear all fandom-related data
                        localStorage.removeItem('fandomLoggedIn');
                        localStorage.removeItem('fandomName');
                        localStorage.removeItem('fandomUsername');
                        localStorage.removeItem('fandomEmail');
                        localStorage.removeItem('fandomPassword');

                        // Update navbar to show login button
                        updateNavbar();

                        // Optional: redirect to login page after logout
                        // window.location.href = 'loginpage.html';
                        // Or just stay on the same page (homepage) - fine.
                    });
                }
            } else {
                // Show login button
                authNavContainer.innerHTML = `
                    <a href="loginpage.html" class="login-btn" id="loginNavBtn">
                        Login
                    </a>
                `;
            }
        }

        // Run on page load
        updateNavbar();
    })();