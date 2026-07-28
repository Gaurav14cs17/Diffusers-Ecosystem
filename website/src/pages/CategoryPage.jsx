import { useParams, useNavigate } from 'react-router-dom';
import RadialDendrogram from '../components/RadialDendrogram';
import { treeData } from '../data/treeData';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = treeData.children.find(c => c.id === categoryId);

  if (!category) {
    return (
      <div className="page">
        <p>Category not found.</p>
        <button className="back-btn" onClick={() => navigate('/')}>← Back to Root</button>
      </div>
    );
  }

  const handleNodeClick = (nodeData, depth) => {
    if (depth === 1) {
      navigate(`/category/${categoryId}/${nodeData.id}`);
    } else if (depth >= 2) {
      for (const sub of (category.children || [])) {
        if (sub.id === nodeData.id) {
          navigate(`/category/${categoryId}/${sub.id}`);
          return;
        }
        if (sub.children) {
          const found = sub.children.find(l => l.id === nodeData.id);
          if (found) {
            navigate(`/category/${categoryId}/${sub.id}/${found.id}`);
            return;
          }
        }
      }
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1>{category.name.replace(/\n/g, ' ')}</h1>
        <div className="page-subtitle">{(category.children || []).length} sub-categories &bull; Click to explore &bull; Scroll to zoom</div>
      </div>

      <div className="page-breadcrumb">
        <button className="crumb" onClick={() => navigate('/')}>Root</button>
        <span className="crumb-sep">›</span>
        <span className="crumb active">{category.name.replace(/\n/g, ' ')}</span>
      </div>

      <div className="page-nav-controls">
        <button className="nav-ctrl-btn" onClick={() => navigate(-1)} title="Go Back">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back
        </button>
        <button className="nav-ctrl-btn" onClick={() => navigate('/')} title="Go to Root">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
          Home
        </button>
        <button className="nav-ctrl-btn" onClick={() => navigate(1)} title="Go Forward">
          Next
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>

      <div className="graph-area">
        <RadialDendrogram data={category} onNodeClick={handleNodeClick} />
      </div>
    </div>
  );
}
