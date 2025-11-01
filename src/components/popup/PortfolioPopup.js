import { AxoContext } from "@/src/Context";
import { useContext } from "react";
import Modal from "./Modal";

const PortfolioPopup = () => {
  const { portfolio_modal_show, portfolioData } = useContext(AxoContext);

  // If no portfolio data, return null
  if (!portfolioData) return null;

  return (
    <Modal close={portfolio_modal_show}>
      <div className="content">
        <div className="img">
          <img
            src={portfolioData.image}
            alt={portfolioData.title}
          />
        </div>
        <div className="des">
          <span>Personal Project</span>
          <h4>{portfolioData.title}</h4>
          <p>{portfolioData.description}</p>
          
          <div className="project-details">
            <p>
              <strong>Technologies:</strong> {portfolioData.technologies.join(", ")}
            </p>
            <p>
              <strong>Industry:</strong> Web Development
            </p>
            <p>
              <strong>Date:</strong> 2025
            </p>
            
            {portfolioData.liveUrl && portfolioData.liveUrl !== "#" && (
              <p>
                <strong>Live Demo:</strong>{" "}
                <a
                  href={portfolioData.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#1e90ff', textDecoration: 'underline', cursor: 'pointer' }}
                >
                  View Project
                </a>
              </p>
            )}
            
            {portfolioData.githubUrl && portfolioData.githubUrl !== "#" && (
              <p>
                <strong>GitHub:</strong>{" "}
                <a
                  href={portfolioData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#1e90ff', textDecoration: 'underline', cursor: 'pointer' }}
                >
                  View Code
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PortfolioPopup;