export default function Alert({ type = 'error', message }) {
    const baseStyles = {
      error: {
        bg: 'bg-red-100',
        border: 'border-red-400',
        text: 'text-red-700',
      },
      success: {
        bg: 'bg-green-100',
        border: 'border-green-400',
        text: 'text-green-700',
      },
      warning: {
        bg: 'bg-yellow-100',
        border: 'border-yellow-400',
        text: 'text-yellow-700',
      },
    };
  
    const style = baseStyles[type] || baseStyles.error;
  
    return (
      <div className={`${style.bg} border ${style.border} ${style.text} px-4 py-3 rounded relative`} role="alert">
        <strong className="font-bold">{type.charAt(0).toUpperCase() + type.slice(1)}: </strong>
        <span className="block sm:inline">{message}</span>
      </div>
    );
  }
  