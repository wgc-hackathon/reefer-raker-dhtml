function submitChoices() {

  const boxes = document.querySelectorAll(`[data-type="box"]`);

  const data = []

  for (const box of boxes) {
    const checkbox = box.querySelector("input[type=checkbox]")

    if (checkbox.checked) {

      const item = {}
      item.id = box.querySelector(`[data-attribute="id"]`).innerHTML
      item.name = box.querySelector(`[data-attribute="name"]`).innerHTML
      item.barcode = box.querySelector(`[data-attribute="barcode"]`).innerHTML
      data.push(item)
    }

  }

  // alert(`boxes ${boxes.length}`);

  localStorage.setItem('boxes', JSON.stringify(data))
  // console.log(data);
}