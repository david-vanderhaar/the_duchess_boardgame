import html2canvas from 'html2canvas';

export const exportAsPng = async (printRef, imageName = 'duke_tile') => {
  const element = printRef.current;
  const canvas = await html2canvas(element);

  const data = canvas.toDataURL('image/png');
  const link = document.createElement('a');

  if (typeof link.download === 'string') {
    link.href = data;
    link.download = `${imageName}.png`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(data);
  }
};