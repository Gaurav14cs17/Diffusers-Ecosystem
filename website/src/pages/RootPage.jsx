import { useNavigate } from 'react-router-dom';
import RadialDendrogram from '../components/RadialDendrogram';
import { treeData } from '../data/treeData';

export default function RootPage() {
  const navigate = useNavigate();

  const handleNodeClick = (nodeData, depth) => {
    if (depth === 1) {
      navigate(`/category/${nodeData.id}`);
    } else if (depth === 2) {
      const parent = treeData.children.find(c =>
        c.children && c.children.some(sub => sub.id === nodeData.id)
      );
      if (parent) {
        navigate(`/category/${parent.id}/${nodeData.id}`);
      }
    } else if (depth >= 3) {
      let categoryId = null;
      let subId = null;
      for (const cat of treeData.children) {
        if (!cat.children) continue;
        for (const sub of cat.children) {
          if (!sub.children) continue;
          const found = sub.children.find(l => l.id === nodeData.id);
          if (found) {
            categoryId = cat.id;
            subId = sub.id;
            break;
          }
        }
        if (categoryId) break;
      }
      if (categoryId && subId) {
        navigate(`/category/${categoryId}/${subId}/${nodeData.id}`);
      }
    }
  };

  return (
    <div className="page home-page">
      <div className="page-header">
        <h1><span className="gradient-text">Diffusers Ecosystem</span></h1>
        <div className="page-subtitle">Interactive Knowledge Graph &bull; Click nodes to explore &bull; Scroll to zoom &bull; Drag to pan</div>
      </div>

      <div className="graph-area">
        <RadialDendrogram data={treeData} onNodeClick={handleNodeClick} />
      </div>
    </div>
  );
}
