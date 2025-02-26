'use client';

import { useEffect, useState } from 'react';

export default function PageViewCounter() {
  const [views, setViews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const incrementViews = async () => {
      try {
        const response = await fetch('/api/pageviews');
        if (!response.ok) throw new Error('Failed to fetch page views');
        const data = await response.json();
        setViews(data.count);
      } catch (err) {
        console.error('Error fetching page views:', err);
        setError('Failed to load page views');
      }
    };

    incrementViews();
  }, []);

  if (error) return null; // Hide counter if there's an error
  if (views === null) return null; // Hide counter while loading

  return (
    <div className="text-sm text-gray-500">
      {views.toLocaleString()} page views
    </div>
  );
}
