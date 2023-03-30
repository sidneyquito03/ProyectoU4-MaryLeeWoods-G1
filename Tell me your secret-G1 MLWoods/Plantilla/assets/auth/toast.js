export function toast(mensaje,type = "success"){
    Toastify({
        text: mensaje,
        duration: 3000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: type === "success" ? "linear-gradient(274.88deg, #C83DE5 4.97%, #3AF1CE 98.41%)" : "linear-gradient(to right, #DE5266, #D42840)",
        },
      //  onClick: function(){} // Callback after click
      }).showToast();
}