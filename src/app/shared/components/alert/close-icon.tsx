const CloseButtonIcon = (type: string): string => {
    switch (type) {
      case 'success':
        return 'close-icon-success';
      case 'warning':
        return 'close-icon-warning';
      case 'error':
        return 'close-icon-error';
      default:
        return 'close-icon-info';
    }
  };
  export default CloseButtonIcon;
  