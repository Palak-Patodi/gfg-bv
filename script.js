
      <script>
                 document.addEventListener("DOMContentLoaded", function () {
                 const teamTabs = document.querySelectorAll(".team-tab");
                const teamSections = document.querySelectorAll(".team-section");
                                    
                teamTabs.forEach(tab => {
                      tab.addEventListener("click", function () {
                      const selectedTeam = this.getAttribute("data-team");
                                            
                      teamSections.forEach(section => {
                             section.style.display = "none";
                        });
                                            
                                 teamTabs.forEach(button => {
                            button.classList.remove("active");
                                            });
                                            
                                            document.getElementById(selectedTeam).style.display = "flex";
                                            this.classList.add("active");
                                        });
                                    });
                                });
          </script>
                                document.addEventListener("DOMContentLoaded", function () {
    const teamTabs = document.querySelectorAll(".team-tab");
    const teamSections = document.querySelectorAll(".team-section");

    teamTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const selectedTeam = this.getAttribute("data-team");

            // Hide all sections
            teamSections.forEach(section => {
                section.style.display = "none";
            });

            // Remove active class from all tabs
            teamTabs.forEach(button => {
                button.classList.remove("active");
            });

            // Show the selected section and activate tab
            document.getElementById(selectedTeam).style.display = "flex";
            this.classList.add("active");
        });
    });
});
