export function afterStarted() {
    window.rclModuleValidation = {
        getStatus: () => "Loaded"
    };
}