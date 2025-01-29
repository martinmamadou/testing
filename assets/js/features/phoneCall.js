export function makePhoneCall(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const phoneNumber = '+33612345678';
    
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = `tel:${phoneNumber}`;
    } else {
        alert(`Appelez-nous au ${phoneNumber}`);
    }
} 