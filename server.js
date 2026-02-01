app.get('/admin-panel-secure-access', (req, res) => {
    // In a real app, add a password check here
    res.json(adminLogs); 
});
