async function getProcessedData(url) {
    try {
      const data = await downloadData(url);
      const processed = await processDataInWorker(data);
      return processed;
    } catch (e) {
      const fallbackData = await downloadFallbackData(url);
      const processedFallback = await processDataInWorker(fallbackData);
      return processedFallback;
    }
  }
  