export const treeData = {
  name: "Diffusers\nLibrary",
  id: "root",
  children: [
    {
      name: "Foundations",
      id: "foundations",
      children: [
        {
          name: "Diffusion\nTheory",
          id: "diffusion-theory",
          children: [
            { name: "Deep Unsupervised Learning using Nonequilibrium Thermodynamics", id: "sohl-dickstein", year: 2015, month: 3, url: "https://arxiv.org/abs/1503.03585" },
            { name: "Generative Modeling by Estimating Gradients of Data Distribution (Score Matching)", id: "score-matching", year: 2019, month: 7, url: "https://arxiv.org/abs/1907.05600" },
            { name: "Denoising Diffusion Probabilistic Models (DDPM)", id: "ddpm-foundation", year: 2020, month: 6, url: "https://arxiv.org/abs/2006.11239" },
            { name: "Improved Denoising Diffusion Probabilistic Models", id: "improved-ddpm", year: 2021, month: 2, url: "https://arxiv.org/abs/2102.09672" },
            { name: "Score-Based Generative Modeling through SDEs", id: "score-sde-theory", year: 2020, month: 11, url: "https://arxiv.org/abs/2011.13456" },
            { name: "Variational Diffusion Models", id: "vdm", year: 2021, month: 7, url: "https://arxiv.org/abs/2107.00630" },
            { name: "Understanding Diffusion Objectives as the ELBO with Simple Data Augmentation", id: "elbo-diffusion", year: 2023, month: 3, url: "https://arxiv.org/abs/2303.00848" },
            { name: "Elucidating the Design Space of Diffusion-Based Generative Models (EDM)", id: "edm", year: 2022, month: 6, url: "https://arxiv.org/abs/2206.00364" },
            { name: "Consistency Models", id: "consistency-models-theory", year: 2023, month: 3, url: "https://arxiv.org/abs/2303.01469" },
            { name: "Denoising Diffusion Bridge Models (DDBM)", id: "ddbm", year: 2023, month: 9, url: "https://arxiv.org/abs/2309.16948" },
          ]
        },
        {
          name: "Latent\nDiffusion",
          id: "latent-diffusion-theory",
          children: [
            { name: "High-Resolution Image Synthesis with Latent Diffusion Models (LDM)", id: "ldm-paper", year: 2021, month: 12, url: "https://arxiv.org/abs/2112.10752" },
            { name: "Photorealistic Text-to-Image Diffusion Models (Imagen)", id: "imagen", year: 2022, month: 5, url: "https://arxiv.org/abs/2205.11487" },
            { name: "Hierarchical Text-Conditional Image Generation with CLIP Latents (DALL-E 2)", id: "dalle2", year: 2022, month: 4, url: "https://arxiv.org/abs/2204.06125" },
            { name: "GLIDE: Towards Photorealistic Image Generation and Editing", id: "glide", year: 2021, month: 12, url: "https://arxiv.org/abs/2112.10741" },
            { name: "Imagen 2: Deep Language Understanding for Image Generation", id: "imagen2", year: 2023, month: 12, url: "https://deepmind.google/technologies/imagen-2/" },
          ]
        },
        {
          name: "Flow\nMatching",
          id: "flow-matching-theory",
          children: [
            { name: "Flow Matching for Generative Modeling", id: "flow-match-theory", year: 2022, month: 10, url: "https://arxiv.org/abs/2210.02747" },
            { name: "Flow Straight and Fast: Learning to Generate and Transfer Data with Rectified Flow", id: "rectified-flow-theory", year: 2022, month: 9, url: "https://arxiv.org/abs/2209.03003" },
            { name: "Conditional Flow Matching: Simulation-Free Dynamic Optimal Transport", id: "cfm", year: 2023, month: 2, url: "https://arxiv.org/abs/2302.00482" },
            { name: "Scaling Rectified Flow Transformers for High-Resolution Image Synthesis (SD3)", id: "sd3-theory", year: 2024, month: 3, url: "https://arxiv.org/abs/2403.03206" },
            { name: "Stochastic Interpolants: A Unifying Framework for Flows and Diffusions", id: "stochastic-interpolants", year: 2023, month: 3, url: "https://arxiv.org/abs/2303.08797" },
            { name: "Flow Matching Guide and Code", id: "fm-guide", year: 2024, month: 12, url: "https://arxiv.org/abs/2412.06264" },
            { name: "Exploring Diffusion and Flow Matching Under Generator Matching", id: "generator-matching", year: 2024, month: 12, url: "https://arxiv.org/abs/2412.11024" },
          ]
        },
        {
          name: "Guidance\nTheory",
          id: "guidance-theory",
          children: [
            { name: "Diffusion Models Beat GANs on Image Synthesis (Classifier Guidance)", id: "classifier-guidance-theory", year: 2021, month: 5, url: "https://arxiv.org/abs/2105.05233" },
            { name: "Classifier-Free Diffusion Guidance", id: "cfg-theory", year: 2022, month: 7, url: "https://arxiv.org/abs/2207.12598" },
            { name: "On the Importance of Noise Scheduling for Diffusion Models", id: "noise-scheduling", year: 2023, month: 1, url: "https://arxiv.org/abs/2301.10972" },
            { name: "Common Diffusion Noise Schedules and Sample Steps are Flawed", id: "flawed-schedules", year: 2023, month: 5, url: "https://arxiv.org/abs/2305.08891" },
          ]
        },
      ]
    },
    {
      name: "Models",
      id: "models",
      children: [
        {
          name: "UNet",
          id: "unet",
          children: [
            { name: "U-Net: Convolutional Networks for Biomedical Image Segmentation (Original)", id: "unet-original", year: 2015, month: 5, url: "https://arxiv.org/abs/1505.04597" },
            { name: "UNet2DModel (Unconditional DDPM)", id: "unet2d", year: 2020, month: 6, url: "https://arxiv.org/abs/2006.11239" },
            { name: "UNet2DConditionModel (Stable Diffusion)", id: "unet2d-cond", year: 2021, month: 12, url: "https://arxiv.org/abs/2112.10752" },
            { name: "UNet3DConditionModel (Video Diffusion)", id: "unet3d", year: 2023, month: 4, url: "https://arxiv.org/abs/2304.08818" },
            { name: "UNetSpatioTemporalConditionModel (SVD)", id: "unet-spatio-temporal", year: 2023, month: 11, url: "https://arxiv.org/abs/2311.15127" },
            { name: "UNetMotionModel (AnimateDiff)", id: "motion-unet", year: 2023, month: 7, url: "https://arxiv.org/abs/2307.04725" },
            { name: "SDXL: Improving Latent Diffusion Models (Dual-UNet)", id: "sdxl-unet", year: 2023, month: 7, url: "https://arxiv.org/abs/2307.01952" },
            { name: "ControlNet: Adding Conditional Control to Text-to-Image", id: "controlnet", year: 2023, month: 2, url: "https://arxiv.org/abs/2302.05543" },
            { name: "IP-Adapter: Text Compatible Image Prompt Adapter", id: "ip-adapter", year: 2023, month: 8, url: "https://arxiv.org/abs/2308.06721" },
            { name: "Stable Video Diffusion: Scaling Latent Video Diffusion Models", id: "svd-model", year: 2023, month: 11, url: "https://arxiv.org/abs/2311.15127" },
            { name: "I2VGen-XL: High-Quality Image-to-Video Synthesis", id: "i2vgen-xl", year: 2023, month: 11, url: "https://arxiv.org/abs/2311.04145" },
          ]
        },
        {
          name: "VAE",
          id: "vae",
          children: [
            { name: "Auto-Encoding Variational Bayes (Original VAE)", id: "vae-original", year: 2013, month: 12, url: "https://arxiv.org/abs/1312.6114" },
            { name: "Neural Discrete Representation Learning (VQ-VAE)", id: "vqvae", year: 2017, month: 11, url: "https://arxiv.org/abs/1711.00937" },
            { name: "Generating Diverse High-Fidelity Images with VQ-VAE-2", id: "vqvae2", year: 2019, month: 6, url: "https://arxiv.org/abs/1906.00446" },
            { name: "Taming Transformers for High-Resolution Image Synthesis (VQGAN)", id: "vqgan", year: 2020, month: 12, url: "https://arxiv.org/abs/2012.09841" },
            { name: "AutoencoderKL (Stable Diffusion VAE)", id: "autoencoder-kl", year: 2021, month: 12, url: "https://arxiv.org/abs/2112.10752" },
            { name: "AutoencoderKLTemporalDecoder (SVD VAE)", id: "autoencoder-kl-temporal", year: 2023, month: 11, url: "https://arxiv.org/abs/2311.15127" },
            { name: "AutoencoderKLCogVideoX (Video VAE)", id: "autoencoder-cogvideo", year: 2024, month: 8, url: "https://arxiv.org/abs/2408.06072" },
            { name: "AutoencoderKLHunyuanVideo (Causal 3D VAE)", id: "autoencoder-hunyuan", year: 2024, month: 12, url: "https://arxiv.org/abs/2412.03603" },
            { name: "AutoencoderKLWan (Wan Video VAE)", id: "autoencoder-wan", year: 2025, month: 3, url: "https://arxiv.org/abs/2503.20314" },
            { name: "AutoencoderDC (Deep Compression Autoencoder for SANA)", id: "autoencoder-dc", year: 2024, month: 10, url: "https://arxiv.org/abs/2410.10733" },
            { name: "AutoencoderOobleck (Audio Spectrogram VAE)", id: "autoencoder-oobleck", year: 2024, url: "https://huggingface.co/docs/diffusers/api/models/autoencoderoobleck" },
            { name: "Tiny AutoEncoder for Stable Diffusion (TAESD)", id: "taesd", year: 2023, url: "https://github.com/madebyollin/taesd" },
            { name: "Asymmetric VQGAN (Inpainting VAE)", id: "asymmetric-vqgan", year: 2022, month: 6, url: "https://arxiv.org/abs/2306.04632" },
            { name: "Consistency Decoder", id: "consistency-decoder", year: 2023, month: 11, url: "https://github.com/openai/consistencydecoder" },
            { name: "AutoencoderKLLTXVideo (LTX Video VAE)", id: "autoencoder-ltx", year: 2024, month: 11, url: "https://arxiv.org/abs/2501.00103" },
            { name: "AutoencoderKLMochi (Mochi Video VAE)", id: "autoencoder-mochi", year: 2024, month: 10, url: "https://github.com/genmoai/mochi" },
            { name: "Step-Video-VAE (16x16 spatial + 8x temporal)", id: "step-video-vae", year: 2025, month: 2, url: "https://arxiv.org/abs/2502.10248" },
          ]
        },
        {
          name: "Transformers\n(DiT)",
          id: "dit-models",
          children: [
            { name: "Scalable Diffusion Models with Transformers (DiT)", id: "dit", year: 2022, month: 12, url: "https://arxiv.org/abs/2212.09748" },
            { name: "Scalable Interpolant Transformers (SiT)", id: "sit", year: 2024, month: 1, url: "https://arxiv.org/abs/2401.08740" },
            { name: "PixArt-α: Fast Training of Diffusion Transformer", id: "pixart-alpha", year: 2023, month: 10, url: "https://arxiv.org/abs/2310.00426" },
            { name: "PixArt-Σ: Weak-to-Strong Training for 4K Generation", id: "pixart-sigma", year: 2024, month: 3, url: "https://arxiv.org/abs/2403.04692" },
            { name: "Stable Diffusion 3 (MM-DiT — Multimodal DiT)", id: "sd3", year: 2024, month: 3, url: "https://arxiv.org/abs/2403.03206" },
            { name: "FLUX.1 (Rectified Flow Transformer)", id: "flux", year: 2024, month: 8, url: "https://blackforestlabs.ai/announcing-black-forest-labs/" },
            { name: "Hunyuan-DiT: Powerful Multi-Resolution Diffusion Transformer", id: "hunyuan-dit", year: 2024, month: 5, url: "https://arxiv.org/abs/2405.11427" },
            { name: "AuraFlow: Flow-based Diffusion Transformer", id: "auraflow", year: 2024, month: 7, url: "https://blog.fal.ai/auraflow/" },
            { name: "Lumina-T2X: Transforming Text into Any Modality", id: "lumina", year: 2024, month: 5, url: "https://arxiv.org/abs/2405.05945" },
            { name: "CogView3: Finer and Faster Text-to-Image (Relay Diffusion)", id: "cogview3", year: 2024, month: 3, url: "https://arxiv.org/abs/2403.05121" },
            { name: "Latte: Latent Diffusion Transformer for Videos", id: "latte", year: 2024, month: 1, url: "https://arxiv.org/abs/2401.03048" },
            { name: "SANA: Efficient High-Resolution Linear DiT with Efficient Attention", id: "sana", year: 2024, month: 10, url: "https://arxiv.org/abs/2410.10733" },
            { name: "Lumina-Next: Making Lumina-T2X Stronger and Faster with Next-DiT", id: "lumina-next", year: 2024, month: 6, url: "https://arxiv.org/abs/2406.18583" },
            { name: "Improving Image Generation with Better Captions (DALL-E 3)", id: "dalle3", year: 2023, month: 10, url: "https://cdn.openai.com/papers/dall-e-3.pdf" },
            { name: "Playground v2.5: Enhancing Aesthetic Quality in Text-to-Image", id: "playground-v25", year: 2024, month: 2, url: "https://arxiv.org/abs/2402.17245" },
            { name: "Kolors: Photorealistic Text-to-Image Synthesis", id: "kolors", year: 2024, month: 7, url: "https://github.com/Kwai-Kolors/Kolors" },
            { name: "Stable Cascade (Würstchen v3)", id: "stable-cascade", year: 2024, month: 2, url: "https://stability.ai/news/introducing-stable-cascade" },
            { name: "SANA 1.5: Efficient Scaling of Training-Time and Inference-Time Compute", id: "sana15", year: 2025, month: 1, url: "https://arxiv.org/abs/2501.18427" },
            { name: "SANA-Sprint: One-Step Diffusion with Continuous-Time Consistency Distillation", id: "sana-sprint", year: 2025, month: 3, url: "https://github.com/NVlabs/Sana" },
          ]
        },
        {
          name: "Video\nModels",
          id: "video-models",
          children: [
            { name: "Video Diffusion Models", id: "vdm-model", year: 2022, month: 4, url: "https://arxiv.org/abs/2204.03458" },
            { name: "Make-A-Video: Text-to-Video Generation without Text-Video Data", id: "make-a-video", year: 2022, month: 9, url: "https://arxiv.org/abs/2209.14792" },
            { name: "Align your Latents: High-Resolution Video Synthesis with Latent Diffusion", id: "align-latents", year: 2023, month: 4, url: "https://arxiv.org/abs/2304.08818" },
            { name: "AnimateDiff: Animate Your Personalized T2I Models", id: "animatediff-model", year: 2023, month: 7, url: "https://arxiv.org/abs/2307.04725" },
            { name: "Stable Video Diffusion (SVD)", id: "svd", year: 2023, month: 11, url: "https://arxiv.org/abs/2311.15127" },
            { name: "CogVideoX: Text-to-Video Diffusion with Expert Transformer", id: "cogvideox", year: 2024, month: 8, url: "https://arxiv.org/abs/2408.06072" },
            { name: "Mochi 1: High-Fidelity Video Generation Model", id: "mochi", year: 2024, month: 10, url: "https://github.com/genmoai/mochi" },
            { name: "HunyuanVideo: A Systematic Framework for Video Generation", id: "hunyuan-video", year: 2024, month: 12, url: "https://arxiv.org/abs/2412.03603" },
            { name: "LTX-Video: Realtime Video Latent Diffusion", id: "ltx-video", year: 2024, month: 11, url: "https://arxiv.org/abs/2501.00103" },
            { name: "Allegro: Open-Source Video Generation Model", id: "allegro", year: 2024, month: 10, url: "https://arxiv.org/abs/2410.15458" },
            { name: "Wan: Open and Advanced Large-Scale Video Generative Models", id: "wan-video", year: 2025, month: 3, url: "https://arxiv.org/abs/2503.20314" },
            { name: "Open-Sora: Democratizing Efficient Video Production", id: "open-sora", year: 2024, month: 3, url: "https://arxiv.org/abs/2412.00131" },
            { name: "Step-Video-T2V: 30B Text-to-Video Foundation Model", id: "step-video", year: 2025, month: 2, url: "https://arxiv.org/abs/2502.10248" },
            { name: "Step-Video-TI2V: Text-Driven Image-to-Video Generation", id: "step-video-ti2v", year: 2025, month: 3, url: "https://arxiv.org/abs/2503.11251" },
            { name: "SkyReels-V2: Infinite-length Film Generative Model", id: "skyreels-v2", year: 2025, month: 4, url: "https://arxiv.org/abs/2504.13074" },
            { name: "MAGI-1: Autoregressive Video Generation at Scale (24B)", id: "magi1", year: 2025, month: 5, url: "https://arxiv.org/abs/2505.13211" },
            { name: "VACE: All-in-One Video Creation and Editing (Wan2.1)", id: "vace", year: 2025, month: 5, url: "https://arxiv.org/abs/2503.07598" },
            { name: "SANA-Video: Efficient Video Generation with Linear DiT", id: "sana-video", year: 2025, month: 6, url: "https://github.com/NVlabs/Sana" },
            { name: "SkyReels-V3: Unified Multimodal Condition Video Generation", id: "skyreels-v3", year: 2026, month: 1, url: "https://arxiv.org/abs/2601.17323" },
            { name: "SkyReels-V4: Multi-modal Video-Audio Generation and Editing", id: "skyreels-v4", year: 2026, month: 2, url: "https://arxiv.org/abs/2602.21818" },
            { name: "SANA-Video 2.0: Hybrid Linear Attention for Video Generation", id: "sana-video2", year: 2026, month: 7, url: "https://arxiv.org/abs/2607.21553" },
          ]
        },
        {
          name: "Prior &\nCascade",
          id: "prior-models",
          children: [
            { name: "Hierarchical Text-Conditional Image Generation (DALL-E 2 / unCLIP)", id: "unclip", year: 2022, month: 4, url: "https://arxiv.org/abs/2204.06125" },
            { name: "Kandinsky: Text-to-Image via Prior + Decoder", id: "kandinsky", year: 2023, month: 10, url: "https://arxiv.org/abs/2310.03502" },
            { name: "Würstchen: Efficient Pretraining of Text-to-Image Models", id: "wuerstchen", year: 2023, month: 6, url: "https://arxiv.org/abs/2306.00637" },
            { name: "Cascaded Diffusion Models for High Fidelity Image Generation", id: "cascaded-diffusion", year: 2021, month: 6, url: "https://arxiv.org/abs/2106.15282" },
            { name: "eDiff-I: Text-to-Image Diffusion Models with Ensemble of Expert Denoisers", id: "ediff-i", year: 2022, month: 11, url: "https://arxiv.org/abs/2211.01324" },
            { name: "DeepFloyd IF (Pixel-Space Cascaded Diffusion)", id: "deepfloyd-if", year: 2023, month: 4, url: "https://github.com/deep-floyd/IF" },
          ]
        },
        {
          name: "Text\nEncoders",
          id: "text-encoders",
          children: [
            { name: "CLIP: Learning Transferable Visual Models From Natural Language", id: "clip", year: 2021, month: 2, url: "https://arxiv.org/abs/2103.00020" },
            { name: "OpenCLIP: An Open Source Implementation of CLIP", id: "openclip", year: 2022, url: "https://github.com/mlfoundations/open_clip" },
            { name: "Exploring the Limits of Transfer Learning with a Unified T5 Model", id: "t5", year: 2019, month: 10, url: "https://arxiv.org/abs/1910.10683" },
            { name: "BERT: Pre-training of Deep Bidirectional Transformers", id: "bert-encoder", year: 2018, month: 10, url: "https://arxiv.org/abs/1810.04805" },
            { name: "SigLIP: Sigmoid Loss for Language Image Pre-Training", id: "siglip", year: 2023, month: 3, url: "https://arxiv.org/abs/2303.15343" },
            { name: "Gemma: Open Models Based on Gemini Research (FLUX/SD3 T5)", id: "gemma-encoder", year: 2024, month: 2, url: "https://arxiv.org/abs/2403.08295" },
            { name: "T5-XXL (4.7B encoder for SD3/FLUX)", id: "t5-xxl", year: 2019, month: 10, url: "https://arxiv.org/abs/1910.10683" },
            { name: "ChatGLM (Bilingual encoder for HunyuanDiT/Kolors)", id: "chatglm-encoder", year: 2024, url: "https://github.com/THUDM/ChatGLM-6B" },
            { name: "Qwen2.5 (Encoder for Wan Video)", id: "qwen25-encoder", year: 2024, url: "https://github.com/QwenLM/Qwen2.5" },
          ]
        },
        {
          name: "Attention\nBlocks",
          id: "attention-blocks",
          children: [
            { name: "Attention Is All You Need (Transformer)", id: "transformer-attention", year: 2017, month: 6, url: "https://arxiv.org/abs/1706.03762" },
            { name: "Cross-Attention (Text Conditioning in UNet)", id: "cross-attention", year: 2021, month: 12, url: "https://arxiv.org/abs/2112.10752" },
            { name: "Prompt-to-Prompt Image Editing with Cross Attention Control", id: "p2p", year: 2022, month: 8, url: "https://arxiv.org/abs/2208.01626" },
            { name: "Attend-and-Excite: Attention-Based Semantic Guidance", id: "attend-excite", year: 2023, month: 1, url: "https://arxiv.org/abs/2301.13826" },
            { name: "FlashAttention: Fast and Memory-Efficient Exact Attention", id: "flash-attention", year: 2022, month: 5, url: "https://arxiv.org/abs/2205.14135" },
            { name: "FlashAttention-2: Faster Attention with Better Parallelism", id: "flash-attention-2", year: 2023, month: 7, url: "https://arxiv.org/abs/2307.08691" },
            { name: "xFormers: A Modular and Hackable Transformer Modelling Library", id: "xformers-lib", year: 2022, url: "https://github.com/facebookresearch/xformers" },
            { name: "Memory Efficient Attention (Rabe & Staats)", id: "memory-efficient-attn", year: 2021, month: 12, url: "https://arxiv.org/abs/2112.05682" },
            { name: "FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision", id: "flash-attention-3", year: 2024, month: 7, url: "https://arxiv.org/abs/2407.08608" },
            { name: "SageAttention: Accurate 8-Bit Attention for Plug-and-play Inference Acceleration", id: "sage-attention", year: 2024, month: 10, url: "https://arxiv.org/abs/2410.02367" },
            { name: "SageAttention2: Efficient Attention with Thorough Quantization", id: "sage-attention-2", year: 2024, month: 11, url: "https://arxiv.org/abs/2411.10958" },
            { name: "SageAttention3: Microscaling FP4 Attention for Inference and 8-Bit Training", id: "sage-attention-3", year: 2025, month: 5, url: "https://arxiv.org/abs/2505.11594" },
          ]
        },
      ]
    },
    {
      name: "Schedulers",
      id: "schedulers",
      children: [
        {
          name: "Denoising\nSchedulers",
          id: "denoising-schedulers",
          children: [
            { name: "DDPMScheduler (Gaussian noise, Markov chain)", id: "ddpm", year: 2020, month: 6, url: "https://arxiv.org/abs/2006.11239" },
            { name: "DDIMScheduler (Non-Markov deterministic)", id: "ddim", year: 2020, month: 10, url: "https://arxiv.org/abs/2010.02502" },
            { name: "PNDMScheduler (Pseudo Numerical Methods)", id: "pndm", year: 2022, month: 2, url: "https://arxiv.org/abs/2202.09778" },
            { name: "ScoreSdeVeScheduler (Variance Exploding SDE)", id: "score-sde-ve", year: 2020, month: 11, url: "https://arxiv.org/abs/2011.13456" },
            { name: "ScoreSdeVpScheduler (Variance Preserving SDE)", id: "score-sde-vp", year: 2020, month: 11, url: "https://arxiv.org/abs/2011.13456" },
            { name: "IPNDMScheduler (Improved PNDM)", id: "ipndm", year: 2022, month: 2, url: "https://arxiv.org/abs/2202.09778" },
            { name: "DDPMParallelScheduler (Batched parallel denoising)", id: "ddpm-parallel", year: 2023, month: 5, url: "https://arxiv.org/abs/2305.16317" },
            { name: "DDIMParallelScheduler (Parallel DDIM)", id: "ddim-parallel", year: 2023, month: 5, url: "https://arxiv.org/abs/2305.16317" },
          ]
        },
        {
          name: "Fast\nSamplers",
          id: "fast-samplers",
          children: [
            { name: "DPMSolverMultistepScheduler (DPM-Solver)", id: "dpm-solver", year: 2022, month: 6, url: "https://arxiv.org/abs/2206.00927" },
            { name: "DPMSolverSinglestepScheduler", id: "dpm-solver-single", year: 2022, month: 6, url: "https://arxiv.org/abs/2206.00927" },
            { name: "DPM-Solver++ (Guided sampling)", id: "dpm-solver-pp", year: 2022, month: 11, url: "https://arxiv.org/abs/2211.01095" },
            { name: "DPMSolverSDEScheduler (Stochastic DPM)", id: "dpm-sde", year: 2022, month: 6, url: "https://arxiv.org/abs/2206.00927" },
            { name: "UniPCMultistepScheduler (Unified Predictor-Corrector)", id: "unipc", year: 2023, month: 2, url: "https://arxiv.org/abs/2302.04867" },
            { name: "DEISMultistepScheduler (Diffusion Exponential Integrator)", id: "deis", year: 2022, month: 4, url: "https://arxiv.org/abs/2204.13902" },
            { name: "SASolverScheduler (Stochastic Adams Solver)", id: "sa-solver", year: 2023, month: 9, url: "https://arxiv.org/abs/2309.05019" },
            { name: "DPM-Solver-v3 (Empirical Model Statistics)", id: "dpm-v3", year: 2023, month: 10, url: "https://arxiv.org/abs/2310.13268" },
            { name: "Flow-DPM-Solver: Fast Solver for Flow Matching ODE", id: "flow-dpm-solver", year: 2024, month: 3, url: "https://arxiv.org/abs/2403.03206" },
          ]
        },
        {
          name: "Euler\nFamily",
          id: "euler-schedulers",
          children: [
            { name: "EulerDiscreteScheduler (1st order Euler)", id: "euler", year: 2022, month: 6, url: "https://arxiv.org/abs/2206.00364" },
            { name: "EulerAncestralDiscreteScheduler (Ancestral sampling)", id: "euler-ancestral", year: 2022, month: 6, url: "https://arxiv.org/abs/2206.00364" },
            { name: "HeunDiscreteScheduler (2nd order Heun method)", id: "heun", year: 2022, month: 6, url: "https://arxiv.org/abs/2206.00364" },
            { name: "KDPM2DiscreteScheduler (Katherine Crowson's DPM2)", id: "kdpm2", year: 2022, month: 6, url: "https://arxiv.org/abs/2206.00364" },
            { name: "KDPM2AncestralDiscreteScheduler (Ancestral DPM2)", id: "kdpm2-ancestral", year: 2022, month: 6, url: "https://arxiv.org/abs/2206.00364" },
            { name: "LMSDiscreteScheduler (Linear Multistep)", id: "lms", year: 2022, month: 6, url: "https://arxiv.org/abs/2206.00364" },
            { name: "EDMEulerScheduler (EDM framework Euler)", id: "edm-euler", year: 2022, month: 6, url: "https://arxiv.org/abs/2206.00364" },
            { name: "EDMDPMSolverMultistepScheduler (EDM + DPM)", id: "edm-dpm", year: 2022, month: 6, url: "https://arxiv.org/abs/2206.00364" },
          ]
        },
        {
          name: "Flow\nMatching",
          id: "flow-matching",
          children: [
            { name: "FlowMatchEulerDiscreteScheduler", id: "flow-euler", year: 2022, month: 10, url: "https://arxiv.org/abs/2210.02747" },
            { name: "FlowMatchHeunDiscreteScheduler (2nd order flow)", id: "flow-heun", year: 2022, month: 10, url: "https://arxiv.org/abs/2210.02747" },
            { name: "Rectified Flow (Straight path ODE)", id: "rectified-flow", year: 2022, month: 9, url: "https://arxiv.org/abs/2209.03003" },
            { name: "Stable Diffusion 3 Flow Matching Scheduler", id: "sd3-flow", year: 2024, month: 3, url: "https://arxiv.org/abs/2403.03206" },
            { name: "FLUX Flow Matching Scheduler", id: "flux-flow", year: 2024, month: 8, url: "https://blackforestlabs.ai/" },
            { name: "CosineDPMSolverMultistepScheduler (Cosine schedule for flow)", id: "cosine-dpm", year: 2024, url: "https://huggingface.co/docs/diffusers/api/schedulers/cosine_dpm" },
            { name: "A-FloPS: Accelerating Diffusion via Adaptive Flow Path Sampler", id: "a-flops", year: 2025, month: 9, url: "https://arxiv.org/abs/2509.00036" },
            { name: "PRECISE: SDE-Consistent Stochastic Sampling for Flow-Matching RL", id: "precise", year: 2025, url: "https://arxiv.org/abs/2605.23522" },
          ]
        },
        {
          name: "Consistency &\nDistillation",
          id: "consistency-schedulers",
          children: [
            { name: "Consistency Models (Single-step generation)", id: "consistency-models", year: 2023, month: 3, url: "https://arxiv.org/abs/2303.01469" },
            { name: "Improved Consistency Models (iCM)", id: "improved-cm", year: 2024, month: 1, url: "https://arxiv.org/abs/2310.14189" },
            { name: "Latent Consistency Models (LCM)", id: "lcm", year: 2023, month: 10, url: "https://arxiv.org/abs/2310.04378" },
            { name: "LCMScheduler (1-8 step generation)", id: "lcm-scheduler", year: 2023, month: 10, url: "https://arxiv.org/abs/2310.04378" },
            { name: "TCDScheduler (Trajectory Consistency Distillation)", id: "tcd", year: 2024, month: 2, url: "https://arxiv.org/abs/2402.19159" },
            { name: "Progressive Distillation for Fast Sampling", id: "progressive-distill", year: 2022, month: 2, url: "https://arxiv.org/abs/2202.00512" },
            { name: "InstaFlow: One Step for Image Generation", id: "instaflow", year: 2023, month: 9, url: "https://arxiv.org/abs/2309.06380" },
            { name: "Adversarial Diffusion Distillation (SDXL Turbo)", id: "add-turbo", year: 2023, month: 11, url: "https://arxiv.org/abs/2311.17042" },
            { name: "SDXL-Lightning: Progressive Adversarial Distillation", id: "sdxl-lightning", year: 2024, month: 2, url: "https://arxiv.org/abs/2402.13929" },
            { name: "DMD2: Improved Distribution Matching Distillation", id: "dmd2", year: 2024, month: 5, url: "https://arxiv.org/abs/2405.14867" },
            { name: "Hyper-SD: Trajectory Segmented Consistency Model for Efficient Synthesis", id: "hyper-sd", year: 2024, month: 4, url: "https://arxiv.org/abs/2404.13686" },
            { name: "AnyFlow: Any-Step Video Diffusion with On-Policy Flow Map Distillation", id: "anyflow", year: 2025, month: 5, url: "https://arxiv.org/abs/2605.13724" },
            { name: "CACFM: Curvature-Adaptive Consistency Flow Matching via RL", id: "cacfm", year: 2026, month: 6, url: "https://arxiv.org/abs/2606.22394" },
          ]
        },
        {
          name: "Noise\nSchedules",
          id: "noise-schedules",
          children: [
            { name: "Linear Beta Schedule (DDPM default)", id: "linear-beta", year: 2020, month: 6, url: "https://arxiv.org/abs/2006.11239" },
            { name: "Cosine Beta Schedule (Improved DDPM)", id: "cosine-beta", year: 2021, month: 2, url: "https://arxiv.org/abs/2102.09672" },
            { name: "Scaled Linear Schedule (Stable Diffusion)", id: "scaled-linear", year: 2021, month: 12, url: "https://arxiv.org/abs/2112.10752" },
            { name: "Squaredcos_cap_v2 (Cosine-squared)", id: "squaredcos", year: 2021, month: 2, url: "https://arxiv.org/abs/2102.09672" },
            { name: "Sigmoid Beta Schedule", id: "sigmoid-beta", url: "https://huggingface.co/docs/diffusers/api/schedulers/overview" },
            { name: "v-prediction Parameterization", id: "v-prediction", year: 2022, month: 2, url: "https://arxiv.org/abs/2202.00512" },
            { name: "Zero Terminal SNR", id: "zero-snr", year: 2023, month: 5, url: "https://arxiv.org/abs/2305.08891" },
            { name: "Logit-Normal Sampling (SD3 timestep distribution)", id: "logit-normal", year: 2024, month: 3, url: "https://arxiv.org/abs/2403.03206" },
            { name: "Shift Schedule (Dynamic timestep shifting for resolution)", id: "shift-schedule", year: 2024, month: 3, url: "https://arxiv.org/abs/2403.03206" },
          ]
        },
      ]
    },
    {
      name: "Guiders",
      id: "guiders",
      children: [
        {
          name: "Classifier-Free\nGuidance",
          id: "cfg-guidance",
          children: [
            { name: "Classifier Guidance (Diffusion Beats GANs)", id: "classifier-guidance", year: 2021, month: 5, url: "https://arxiv.org/abs/2105.05233" },
            { name: "Classifier-Free Diffusion Guidance (CFG)", id: "cfg", year: 2022, month: 7, url: "https://arxiv.org/abs/2207.12598" },
            { name: "Dynamic Classifier-Free Guidance", id: "dynamic-cfg", year: 2023, month: 5, url: "https://arxiv.org/abs/2305.18739" },
            { name: "Rescaled CFG (Prevent over-saturation)", id: "rescaled-cfg", year: 2023, month: 5, url: "https://arxiv.org/abs/2305.08891" },
            { name: "Guided Distillation for CFG-free Models", id: "guided-distill", year: 2024, month: 4, url: "https://arxiv.org/abs/2404.19114" },
          ]
        },
        {
          name: "Perturbed\nAttention",
          id: "pag-guidance",
          children: [
            { name: "Self-Rectifying Diffusion via Perturbed-Attention Guidance (PAG)", id: "pag", year: 2024, month: 3, url: "https://arxiv.org/abs/2403.17377" },
            { name: "Smoothed Energy Guidance (SEG)", id: "seg", year: 2024, month: 8, url: "https://arxiv.org/abs/2408.00760" },
            { name: "Self-Attention Guidance (SAG)", id: "sag", year: 2023, month: 8, url: "https://arxiv.org/abs/2210.00939" },
          ]
        },
        {
          name: "Adaptive\nGuidance",
          id: "adaptive-guidance",
          children: [
            { name: "Adaptive Projected Guidance (APG)", id: "apg", year: 2024, month: 10, url: "https://arxiv.org/abs/2410.02416" },
            { name: "Autoguidance: Self-Guidance for Better Generation", id: "autoguidance", year: 2024, month: 3, url: "https://arxiv.org/abs/2403.08849" },
            { name: "CFG++: Manifold-constrained Classifier Free Guidance", id: "cfg-pp", year: 2024, month: 6, url: "https://arxiv.org/abs/2406.08070" },
            { name: "Adaptive Guidance: Training-free Acceleration of Conditional Diffusion", id: "adaptive-free", year: 2023, month: 12, url: "https://arxiv.org/abs/2312.12487" },
          ]
        },
        {
          name: "Specialized\nGuidance",
          id: "special-guidance",
          children: [
            { name: "Skip Layer Guidance (SLG)", id: "slg", year: 2024, month: 7, url: "https://arxiv.org/abs/2407.07658" },
            { name: "Tangential Classifier-Free Guidance (TCFG)", id: "tcfg", year: 2024, url: "https://arxiv.org/abs/2312.00400" },
            { name: "Negative Prompting (Unconditional Guidance Subtraction)", id: "negative-prompt", url: "https://huggingface.co/docs/diffusers/using-diffusers/weighted_prompts" },
            { name: "Multi-Prompt / Prompt Weighting", id: "prompt-weighting", url: "https://huggingface.co/docs/diffusers/using-diffusers/weighted_prompts" },
            { name: "Universal Guidance for Diffusion Models", id: "universal-guidance", year: 2023, month: 2, url: "https://arxiv.org/abs/2302.07121" },
            { name: "Guidance Distillation (FLUX.1-schnell CFG-free)", id: "guidance-distill", year: 2024, month: 8, url: "https://blackforestlabs.ai/" },
            { name: "DIFT: Diffusion Features for Semantic Correspondence", id: "dift", year: 2023, month: 6, url: "https://arxiv.org/abs/2306.03881" },
          ]
        }
      ]
    },
    {
      name: "Pipelines",
      id: "pipelines",
      children: [
        {
          name: "Text-to-Image",
          id: "t2i-pipelines",
          children: [
            { name: "StableDiffusionPipeline (SD v1/v2)", id: "sd-pipeline", year: 2022, month: 8, url: "https://arxiv.org/abs/2112.10752" },
            { name: "StableDiffusionXLPipeline (SDXL)", id: "sdxl-pipeline", year: 2023, month: 7, url: "https://arxiv.org/abs/2307.01952" },
            { name: "StableDiffusion3Pipeline (SD3 / MM-DiT)", id: "sd3-pipeline", year: 2024, month: 3, url: "https://arxiv.org/abs/2403.03206" },
            { name: "FluxPipeline (FLUX.1)", id: "flux-pipeline", year: 2024, month: 8, url: "https://blackforestlabs.ai/" },
            { name: "PixArtAlphaPipeline", id: "pixart-pipeline", year: 2023, month: 10, url: "https://arxiv.org/abs/2310.00426" },
            { name: "PixArtSigmaPipeline", id: "pixart-sigma-pipeline", year: 2024, month: 3, url: "https://arxiv.org/abs/2403.04692" },
            { name: "HunyuanDiTPipeline", id: "hunyuan-pipeline", year: 2024, month: 5, url: "https://arxiv.org/abs/2405.11427" },
            { name: "KandinskyPipeline / KandinskyCombinedPipeline", id: "kandinsky-pipeline", year: 2023, month: 10, url: "https://arxiv.org/abs/2310.03502" },
            { name: "IFPipeline (DeepFloyd IF)", id: "if-pipeline", year: 2023, month: 4, url: "https://github.com/deep-floyd/IF" },
            { name: "WuerstchenPipeline", id: "wuerstchen-pipeline", year: 2023, month: 6, url: "https://arxiv.org/abs/2306.00637" },
            { name: "AuraFlowPipeline", id: "auraflow-pipeline", year: 2024, month: 7, url: "https://blog.fal.ai/auraflow/" },
            { name: "SanaPipeline (SANA)", id: "sana-pipeline", year: 2024, month: 10, url: "https://arxiv.org/abs/2410.10733" },
            { name: "LuminaText2ImgPipeline", id: "lumina-pipeline", year: 2024, month: 5, url: "https://arxiv.org/abs/2405.05945" },
            { name: "UnCLIPPipeline", id: "unclip-pipeline", year: 2022, month: 4, url: "https://arxiv.org/abs/2204.06125" },
            { name: "DALL-E 3: Improving Image Generation with Better Captions", id: "dalle3-pipeline", year: 2023, month: 10, url: "https://cdn.openai.com/papers/dall-e-3.pdf" },
            { name: "Playground v2.5 (PlaygroundPipeline)", id: "playground-pipeline", year: 2024, month: 2, url: "https://arxiv.org/abs/2402.17245" },
            { name: "SANA 1.5: Efficient Scaling in Linear DiT", id: "sana15-pipeline", year: 2025, month: 1, url: "https://arxiv.org/abs/2501.18427" },
          ]
        },
        {
          name: "Image-to-Image",
          id: "i2i-pipelines",
          children: [
            { name: "StableDiffusionImg2ImgPipeline", id: "img2img", year: 2022, url: "https://arxiv.org/abs/2112.10752" },
            { name: "StableDiffusionXLImg2ImgPipeline", id: "sdxl-img2img", year: 2023, url: "https://arxiv.org/abs/2307.01952" },
            { name: "SDEdit: Image Composition and Editing with Stochastic Differential Equations", id: "sdedit", year: 2021, month: 8, url: "https://arxiv.org/abs/2108.01073" },
            { name: "InstructPix2Pix: Learning to Follow Image Editing Instructions", id: "instruct-pix2pix", year: 2022, month: 11, url: "https://arxiv.org/abs/2211.09800" },
            { name: "Pix2Pix Zero: Zero-Shot Image-to-Image Translation", id: "pix2pix-zero", year: 2023, month: 2, url: "https://arxiv.org/abs/2302.03027" },
            { name: "CycleDiffusion: Text-Driven Image-to-Image with Semantic Correspondence", id: "cycle-diffusion", year: 2022, month: 10, url: "https://arxiv.org/abs/2210.05559" },
            { name: "DiffEdit: Diffusion-based Semantic Image Editing with Mask Guidance", id: "diffedit", year: 2022, month: 10, url: "https://arxiv.org/abs/2210.11427" },
            { name: "Stable Diffusion Depth2Img Pipeline", id: "depth2img", year: 2022, url: "https://huggingface.co/docs/diffusers/api/pipelines/stable_diffusion/depth2img" },
            { name: "Stable Diffusion Upscale Pipeline (4x Super-Resolution)", id: "sd-upscale", year: 2022, url: "https://huggingface.co/docs/diffusers/api/pipelines/stable_diffusion/upscale" },
            { name: "FluxImg2ImgPipeline", id: "flux-img2img", year: 2024, month: 8, url: "https://blackforestlabs.ai/" },
            { name: "StableDiffusion3Img2ImgPipeline", id: "sd3-img2img", year: 2024, month: 3, url: "https://arxiv.org/abs/2403.03206" },
            { name: "Kolors Img2Img Pipeline", id: "kolors-img2img", year: 2024, month: 7, url: "https://github.com/Kwai-Kolors/Kolors" },
          ]
        },
        {
          name: "Inpainting &\nOutpainting",
          id: "inpaint-pipelines",
          children: [
            { name: "StableDiffusionInpaintPipeline", id: "sd-inpaint", year: 2022, url: "https://arxiv.org/abs/2112.10752" },
            { name: "StableDiffusionXLInpaintPipeline", id: "sdxl-inpaint", year: 2023, url: "https://arxiv.org/abs/2307.01952" },
            { name: "Repaint: Inpainting using Denoising Diffusion Probabilistic Models", id: "repaint", year: 2022, month: 1, url: "https://arxiv.org/abs/2201.09865" },
            { name: "Paint by Example: Exemplar-based Image Editing", id: "paint-by-example", year: 2022, month: 11, url: "https://arxiv.org/abs/2211.13227" },
            { name: "Blended Diffusion for Text-driven Editing of Natural Images", id: "blended-diffusion", year: 2021, month: 11, url: "https://arxiv.org/abs/2111.14818" },
            { name: "Blended Latent Diffusion", id: "blended-latent", year: 2022, month: 6, url: "https://arxiv.org/abs/2206.02779" },
            { name: "HD-Painter: High-Resolution and Prompt-Faithful Text-Guided Image Inpainting", id: "hd-painter", year: 2023, month: 12, url: "https://arxiv.org/abs/2312.14091" },
            { name: "FluxFillPipeline (FLUX Fill for inpainting/outpainting)", id: "flux-fill", year: 2024, month: 8, url: "https://blackforestlabs.ai/" },
            { name: "FluxInpaintPipeline", id: "flux-inpaint", year: 2024, month: 8, url: "https://blackforestlabs.ai/" },
            { name: "StableDiffusion3InpaintPipeline", id: "sd3-inpaint", year: 2024, month: 3, url: "https://arxiv.org/abs/2403.03206" },
          ]
        },
        {
          name: "Video\nGeneration",
          id: "video-pipelines",
          children: [
            { name: "AnimateDiffPipeline", id: "animatediff-pipeline", year: 2023, month: 7, url: "https://arxiv.org/abs/2307.04725" },
            { name: "AnimateDiffVideoToVideoPipeline", id: "animatediff-v2v", year: 2023, month: 7, url: "https://arxiv.org/abs/2307.04725" },
            { name: "StableVideoDiffusionPipeline (SVD)", id: "svd-pipeline", year: 2023, month: 11, url: "https://arxiv.org/abs/2311.15127" },
            { name: "CogVideoXPipeline", id: "cogvideox-pipeline", year: 2024, month: 8, url: "https://arxiv.org/abs/2408.06072" },
            { name: "CogVideoXImageToVideoPipeline", id: "cogvideox-i2v", year: 2024, month: 8, url: "https://arxiv.org/abs/2408.06072" },
            { name: "HunyuanVideoPipeline", id: "hunyuan-video-pipeline", year: 2024, month: 12, url: "https://arxiv.org/abs/2412.03603" },
            { name: "MochiPipeline", id: "mochi-pipeline", year: 2024, month: 10, url: "https://github.com/genmoai/mochi" },
            { name: "LTXPipeline / LTXImageToVideoPipeline", id: "ltx-video-pipeline", year: 2024, month: 11, url: "https://arxiv.org/abs/2501.00103" },
            { name: "WanPipeline (Text/Image-to-Video)", id: "wan-pipeline", year: 2025, month: 3, url: "https://arxiv.org/abs/2503.20314" },
            { name: "AllegroPipeline", id: "allegro-pipeline", year: 2024, month: 10, url: "https://arxiv.org/abs/2410.15458" },
            { name: "TextToVideoSDPipeline (ModelScope)", id: "modelscope-pipeline", year: 2023, month: 8, url: "https://arxiv.org/abs/2308.06571" },
            { name: "LattePipeline", id: "latte-pipeline", year: 2024, month: 1, url: "https://arxiv.org/abs/2401.03048" },
            { name: "Step-Video-T2V Pipeline", id: "step-video-pipeline", year: 2025, month: 2, url: "https://arxiv.org/abs/2502.10248" },
            { name: "SkyReels-V2 Pipeline", id: "skyreels-v2-pipeline", year: 2025, month: 4, url: "https://arxiv.org/abs/2504.13074" },
            { name: "MAGI-1 Pipeline: Autoregressive Video Generation", id: "magi1-pipeline", year: 2025, month: 5, url: "https://arxiv.org/abs/2505.13211" },
            { name: "SANA-Video Pipeline", id: "sana-video-pipeline", year: 2025, month: 6, url: "https://github.com/NVlabs/Sana" },
            { name: "SkyReels-V3 Pipeline", id: "skyreels-v3-pipeline", year: 2026, month: 1, url: "https://arxiv.org/abs/2601.17323" },
            { name: "SkyReels-V4 Pipeline", id: "skyreels-v4-pipeline", year: 2026, month: 2, url: "https://arxiv.org/abs/2602.21818" },
            { name: "SANA-Video 2.0 Pipeline", id: "sana-video2-pipeline", year: 2026, month: 7, url: "https://arxiv.org/abs/2607.21553" },
          ]
        },
        {
          name: "Controlled\nGeneration",
          id: "control-pipelines",
          children: [
            { name: "StableDiffusionControlNetPipeline", id: "controlnet-pipeline", year: 2023, month: 2, url: "https://arxiv.org/abs/2302.05543" },
            { name: "StableDiffusionXLControlNetPipeline", id: "sdxl-controlnet-pipeline", year: 2023, url: "https://arxiv.org/abs/2302.05543" },
            { name: "T2IAdapterPipeline", id: "t2i-adapter", year: 2023, month: 2, url: "https://arxiv.org/abs/2302.08453" },
            { name: "IP-Adapter Pipeline (Image Prompt Adapter)", id: "ip-adapter-pipeline", year: 2023, month: 8, url: "https://arxiv.org/abs/2308.06721" },
            { name: "MultiControlNet (Multiple ControlNets)", id: "multi-controlnet", year: 2023, url: "https://huggingface.co/docs/diffusers/using-diffusers/controlnet" },
            { name: "ControlNet-XS (Lightweight ControlNet)", id: "controlnet-xs", year: 2023, month: 12, url: "https://arxiv.org/abs/2312.06573" },
            { name: "StableDiffusionGLIGENPipeline (Grounded Language-to-Image)", id: "gligen", year: 2023, month: 1, url: "https://arxiv.org/abs/2301.07093" },
            { name: "StableDiffusionAttendAndExcitePipeline", id: "attend-excite-pipeline", year: 2023, month: 1, url: "https://arxiv.org/abs/2301.13826" },
            { name: "FluxControlPipeline (Structural Control)", id: "flux-control-pipeline", year: 2024, month: 8, url: "https://blackforestlabs.ai/" },
            { name: "FluxControlNetPipeline", id: "flux-controlnet-pipeline", year: 2024, month: 8, url: "https://blackforestlabs.ai/" },
            { name: "StableDiffusion3ControlNetPipeline", id: "sd3-controlnet-pipeline", year: 2024, month: 3, url: "https://arxiv.org/abs/2403.03206" },
            { name: "ControlNet Union (Multi-condition single model)", id: "controlnet-union", year: 2024, url: "https://github.com/xinsir6/ControlNetPlus" },
            { name: "InstantStyle: Free Lunch towards Style-Preserving", id: "instantstyle", year: 2024, month: 4, url: "https://arxiv.org/abs/2404.02733" },
            { name: "OmniGen: Unified Image Generation", id: "omnigen", year: 2024, month: 9, url: "https://arxiv.org/abs/2409.11340" },
          ]
        },
        {
          name: "Panorama &\nSpecial",
          id: "special-pipelines",
          children: [
            { name: "StableDiffusionPanoramaPipeline (MultiDiffusion)", id: "panorama", year: 2023, month: 2, url: "https://arxiv.org/abs/2302.08113" },
            { name: "StableDiffusionSAGPipeline (Self-Attention Guidance)", id: "sag-pipeline", year: 2023, url: "https://arxiv.org/abs/2210.00939" },
            { name: "StableDiffusionLDM3DPipeline (Depth + Image)", id: "ldm3d", year: 2023, month: 5, url: "https://arxiv.org/abs/2305.10853" },
            { name: "StableDiffusionDiffEditPipeline", id: "diffedit-pipeline", year: 2022, month: 10, url: "https://arxiv.org/abs/2210.11427" },
            { name: "StableDiffusionLatentUpscalePipeline", id: "latent-upscale", year: 2022, url: "https://huggingface.co/docs/diffusers/api/pipelines/stable_diffusion/latent_upscale" },
            { name: "LatentConsistencyModelPipeline (LCM)", id: "lcm-pipeline", year: 2023, month: 10, url: "https://arxiv.org/abs/2310.04378" },
          ]
        },
        {
          name: "Audio\nGeneration",
          id: "audio-pipelines",
          children: [
            { name: "AudioLDMPipeline (Text-to-Audio)", id: "audioldm", year: 2023, month: 1, url: "https://arxiv.org/abs/2301.12503" },
            { name: "AudioLDM2Pipeline (Unified Audio Generation)", id: "audioldm2", year: 2023, month: 8, url: "https://arxiv.org/abs/2308.05734" },
            { name: "MusicLDMPipeline (Text-to-Music)", id: "musicldm", year: 2023, month: 8, url: "https://arxiv.org/abs/2308.01546" },
            { name: "StableAudioPipeline (Stable Audio Open)", id: "stable-audio", year: 2024, month: 7, url: "https://arxiv.org/abs/2407.14358" },
            { name: "DanceDiffusionPipeline (Unconditional Audio)", id: "dance-diffusion", year: 2022, url: "https://huggingface.co/docs/diffusers/api/pipelines/dance_diffusion" },
            { name: "Tango 2: Aligning Diffusion-based Text-to-Audio with Human Preference", id: "tango2", year: 2024, month: 4, url: "https://arxiv.org/abs/2404.09956" },
          ]
        },
        {
          name: "3D\nGeneration",
          id: "3d-pipelines",
          children: [
            { name: "ShapEPipeline (Text/Image-to-3D)", id: "shape", year: 2023, month: 5, url: "https://arxiv.org/abs/2305.02463" },
            { name: "ShapEImg2ImgPipeline (Image-to-3D)", id: "shape-img2img", year: 2023, month: 5, url: "https://arxiv.org/abs/2305.02463" },
            { name: "Zero-1-to-3: Zero-Shot One Image to 3D Object", id: "zero123", year: 2023, month: 3, url: "https://arxiv.org/abs/2303.11328" },
            { name: "SV3D: Novel Multi-View Synthesis and 3D Generation", id: "sv3d", year: 2024, month: 3, url: "https://arxiv.org/abs/2403.12008" },
            { name: "TripoSR: Fast 3D Object Reconstruction from a Single Image", id: "triposr", year: 2024, month: 3, url: "https://arxiv.org/abs/2403.02151" },
            { name: "InstantMesh: Efficient 3D Mesh Generation", id: "instantmesh", year: 2024, month: 4, url: "https://arxiv.org/abs/2404.07191" },
          ]
        },
      ]
    },
    {
      name: "Modular\nPipelines",
      id: "modular-pipelines",
      children: [
        {
          name: "Core\nBlocks",
          id: "core-blocks",
          children: [
            { name: "TextEncoderStep (Encode text prompt to embeddings)", id: "text-encoder-step", url: "https://huggingface.co/docs/diffusers/api/modular_pipelines" },
            { name: "DenoiseStep (Run the diffusion denoising loop)", id: "denoise-step", url: "https://huggingface.co/docs/diffusers/api/modular_pipelines" },
            { name: "DecodeStep (Decode latents to pixel space via VAE)", id: "decode-step", url: "https://huggingface.co/docs/diffusers/api/modular_pipelines" },
            { name: "SchedulerStep (Configure timesteps and noise level)", id: "scheduler-step", url: "https://huggingface.co/docs/diffusers/api/modular_pipelines" },
            { name: "PrepareLatentsStep (Initialize or prepare latent tensors)", id: "prepare-latents-step", url: "https://huggingface.co/docs/diffusers/api/modular_pipelines" },
            { name: "ImageEncoderStep (Encode images for IP-Adapter/img2img)", id: "image-encoder-step", url: "https://huggingface.co/docs/diffusers/api/modular_pipelines" },
          ]
        },
        {
          name: "Composition\nPatterns",
          id: "composition-patterns",
          children: [
            { name: "SequentialPipelineBlocks (Run blocks in sequence)", id: "sequential-blocks", url: "https://huggingface.co/docs/diffusers/api/modular_pipelines" },
            { name: "AutoPipelineForText2Image (Auto model routing)", id: "auto-t2i", url: "https://huggingface.co/docs/diffusers/api/pipelines/auto_pipeline" },
            { name: "AutoPipelineForImage2Image (Auto img2img routing)", id: "auto-i2i", url: "https://huggingface.co/docs/diffusers/api/pipelines/auto_pipeline" },
            { name: "AutoPipelineForInpainting (Auto inpainting routing)", id: "auto-inpaint", url: "https://huggingface.co/docs/diffusers/api/pipelines/auto_pipeline" },
            { name: "ModularPipeline (Base class for composable pipelines)", id: "modular-base", url: "https://huggingface.co/docs/diffusers/api/modular_pipelines" },
            { name: "PipelineBlock (Base class for pipeline blocks)", id: "pipeline-block", url: "https://huggingface.co/docs/diffusers/api/modular_pipelines" },
            { name: "AutoPipelineForVideo (Auto video routing)", id: "auto-video", url: "https://huggingface.co/docs/diffusers/api/pipelines/auto_pipeline" },
            { name: "InputStep (Pipeline input validation)", id: "input-step", url: "https://huggingface.co/docs/diffusers/api/modular_pipelines" },
            { name: "OutputStep (Pipeline output formatting)", id: "output-step", url: "https://huggingface.co/docs/diffusers/api/modular_pipelines" },
          ]
        },
        {
          name: "Workflow\nExamples",
          id: "workflow-examples",
          children: [
            { name: "SD + ControlNet Composable Workflow", id: "sd-controlnet-workflow", url: "https://huggingface.co/docs/diffusers/using-diffusers/controlnet" },
            { name: "Multi-Adapter Composition (LoRA + IP-Adapter)", id: "multi-adapter-workflow", url: "https://huggingface.co/docs/diffusers/tutorials/using_peft_for_inference" },
            { name: "Img2Img + Inpainting Combined Workflow", id: "combined-workflow", url: "https://huggingface.co/docs/diffusers/using-diffusers/inpaint" },
            { name: "Custom Pipeline Building", id: "custom-pipeline-build", url: "https://huggingface.co/docs/diffusers/using-diffusers/custom_pipeline_overview" },
          ]
        }
      ]
    },
    {
      name: "Loaders",
      id: "loaders",
      children: [
        {
          name: "Model\nLoading",
          id: "model-loading",
          children: [
            { name: "DiffusionPipeline.from_pretrained (HuggingFace Hub)", id: "from-pretrained", url: "https://huggingface.co/docs/diffusers/api/loaders/loading" },
            { name: "from_single_file (Safetensors / .ckpt Checkpoints)", id: "from-single-file", url: "https://huggingface.co/docs/diffusers/using-diffusers/other-formats" },
            { name: "Safetensors: Simple and Fast Model Sharing", id: "safetensors", year: 2023, url: "https://huggingface.co/docs/safetensors" },
            { name: "ONNX Runtime Loading / Export", id: "onnx-loading", url: "https://huggingface.co/docs/diffusers/optimization/onnx" },
            { name: "torch.load / state_dict Loading", id: "torch-load", url: "https://pytorch.org/docs/stable/generated/torch.load.html" },
            { name: "ModelMixin.from_pretrained (Component-level loading)", id: "model-mixin-load", url: "https://huggingface.co/docs/diffusers/api/models/overview" },
            { name: "GGUF from_single_file (Quantized GGUF checkpoints)", id: "gguf-loading", url: "https://huggingface.co/docs/diffusers/quantization/gguf" },
            { name: "Nunchaku Lite Loading (SVDQuant INT4 models)", id: "nunchaku-loading", year: 2024, url: "https://github.com/mit-han-lab/nunchaku" },
            { name: "PipelineQuantizationConfig (Unified quantization loading)", id: "pipeline-quant-config", url: "https://huggingface.co/docs/diffusers/quantization/overview" },
          ]
        },
        {
          name: "LoRA\nAdapters",
          id: "lora-loading",
          children: [
            { name: "LoRA: Low-Rank Adaptation of Large Language Models", id: "lora", year: 2021, month: 6, url: "https://arxiv.org/abs/2106.09685" },
            { name: "load_lora_weights (PEFT Integration)", id: "load-lora", url: "https://huggingface.co/docs/diffusers/using-diffusers/loading_adapters" },
            { name: "fuse_lora / unfuse_lora (Weight merging)", id: "fuse-lora", url: "https://huggingface.co/docs/diffusers/using-diffusers/merge_loras" },
            { name: "set_adapters (Multi-adapter with weights)", id: "set-adapters", url: "https://huggingface.co/docs/diffusers/tutorials/using_peft_for_inference" },
            { name: "LyCORIS: Lora beyond Conventional Methods (LoHa, LoKr, etc.)", id: "lycoris", year: 2023, month: 9, url: "https://arxiv.org/abs/2309.14859" },
            { name: "LoRA Merging and Composition", id: "lora-merge", url: "https://huggingface.co/docs/diffusers/using-diffusers/merge_loras" },
            { name: "PEFT: Parameter-Efficient Fine-Tuning Library", id: "peft", year: 2023, url: "https://github.com/huggingface/peft" },
            { name: "DoRA: Weight-Decomposed Low-Rank Adaptation", id: "dora", year: 2024, month: 2, url: "https://arxiv.org/abs/2402.09353" },
            { name: "LoRA+: Efficient Low-Rank Adaptation of Large Models", id: "lora-plus", year: 2024, month: 2, url: "https://arxiv.org/abs/2402.12354" },
          ]
        },
        {
          name: "Textual\nInversion",
          id: "textual-inversion-loading",
          children: [
            { name: "An Image is Worth One Word: Textual Inversion for Personalization", id: "textual-inversion", year: 2022, month: 8, url: "https://arxiv.org/abs/2208.01618" },
            { name: "load_textual_inversion (Load custom embeddings)", id: "load-ti", url: "https://huggingface.co/docs/diffusers/using-diffusers/loading_adapters" },
            { name: "Multi-concept Textual Inversion", id: "multi-ti", url: "https://huggingface.co/docs/diffusers/training/text_inversion" },
          ]
        },
        {
          name: "IP-Adapter\nLoading",
          id: "ip-adapter-loading",
          children: [
            { name: "IP-Adapter: Text Compatible Image Prompt Adapter", id: "ip-adapter-paper", year: 2023, month: 8, url: "https://arxiv.org/abs/2308.06721" },
            { name: "load_ip_adapter (Load image encoder adapter)", id: "load-ip-adapter", url: "https://huggingface.co/docs/diffusers/using-diffusers/ip_adapter" },
            { name: "IP-Adapter FaceID", id: "ip-adapter-faceid", year: 2024, url: "https://huggingface.co/h94/IP-Adapter-FaceID" },
            { name: "IP-Adapter Plus (Higher fidelity)", id: "ip-adapter-plus", url: "https://huggingface.co/docs/diffusers/using-diffusers/ip_adapter" },
          ]
        },
        {
          name: "Custom\nComponents",
          id: "custom-loading",
          children: [
            { name: "Custom Pipeline Loading (from_pretrained with custom_pipeline)", id: "custom-components", url: "https://huggingface.co/docs/diffusers/using-diffusers/custom_pipeline_overview" },
            { name: "Community Pipelines (GitHub-hosted)", id: "community-pipelines", url: "https://huggingface.co/docs/diffusers/using-diffusers/custom_pipeline_examples" },
            { name: "Scheduler Swapping (pipeline.scheduler = ...)", id: "scheduler-swap", url: "https://huggingface.co/docs/diffusers/using-diffusers/schedulers" },
            { name: "Component Replacement (Swap UNet/VAE/Encoder)", id: "component-swap", url: "https://huggingface.co/docs/diffusers/using-diffusers/loading" },
          ]
        }
      ]
    },
    {
      name: "Quantizers",
      id: "quantizers",
      children: [
        {
          name: "Weight\nQuantization",
          id: "weight-quant",
          children: [
            { name: "bitsandbytes (int8 / int4 / NF4 / FP4)", id: "bnb", year: 2022, month: 8, url: "https://arxiv.org/abs/2208.07339" },
            { name: "QLoRA: Efficient Finetuning of Quantized LLMs (NF4)", id: "qlora", year: 2023, month: 5, url: "https://arxiv.org/abs/2305.14314" },
            { name: "GGUF Format (llama.cpp compatible)", id: "gguf", year: 2023, url: "https://github.com/ggerganov/ggml" },
            { name: "TorchAO: PyTorch Architecture Optimization", id: "torchao", year: 2024, url: "https://github.com/pytorch/ao" },
            { name: "Quanto (HuggingFace Quantization)", id: "quanto", year: 2024, url: "https://github.com/huggingface/optimum-quanto" },
            { name: "GPTQ: Accurate Post-Training Quantization", id: "gptq", year: 2022, month: 10, url: "https://arxiv.org/abs/2210.17323" },
            { name: "AWQ: Activation-aware Weight Quantization", id: "awq", year: 2023, month: 6, url: "https://arxiv.org/abs/2306.00978" },
            { name: "Nunchaku / SVDQuant (INT4 via SVD decomposition)", id: "nunchaku-svdquant", year: 2024, month: 11, url: "https://arxiv.org/abs/2411.05007" },
            { name: "PipelineQuantizationConfig (Unified quant config)", id: "pipeline-quant-config-q", url: "https://huggingface.co/docs/diffusers/quantization/overview" },
          ]
        },
        {
          name: "Inference\nOptimization",
          id: "inference-opt",
          children: [
            { name: "FP8 Dynamic Quantization (E4M3 / E5M2)", id: "fp8", url: "https://huggingface.co/docs/diffusers/quantization/torchao" },
            { name: "torch.compile: PyTorch 2.0 Compiler Integration", id: "torch-compile", url: "https://huggingface.co/docs/diffusers/optimization/torch2.0" },
            { name: "DeepCache: Accelerating Diffusion via Feature Caching", id: "deepcache", year: 2023, month: 12, url: "https://arxiv.org/abs/2312.00858" },
            { name: "Token Merging (ToMe): Token Merging for Fast Stable Diffusion", id: "tome", year: 2023, month: 3, url: "https://arxiv.org/abs/2303.17604" },
            { name: "TensorRT Acceleration", id: "tensorrt", url: "https://huggingface.co/docs/diffusers/optimization/tensorrt" },
            { name: "ONNX Runtime Optimization", id: "onnx-opt", url: "https://huggingface.co/docs/diffusers/optimization/onnx" },
            { name: "OpenVINO Inference Optimization", id: "openvino", url: "https://huggingface.co/docs/diffusers/optimization/open_vino" },
            { name: "Core ML / Apple Silicon Optimization", id: "coreml", url: "https://huggingface.co/docs/diffusers/optimization/coreml" },
            { name: "FP8 Layerwise Casting (Per-layer dynamic FP8)", id: "fp8-layerwise", url: "https://huggingface.co/docs/diffusers/optimization/memory" },
            { name: "Nunchaku NVFP4 / INT4 Inference Acceleration", id: "nunchaku-nvfp4", year: 2024, url: "https://github.com/mit-han-lab/nunchaku" },
            { name: "torch.compile with fullgraph mode", id: "compile-fullgraph", url: "https://huggingface.co/docs/diffusers/optimization/torch2.0" },
          ]
        }
      ]
    },
    {
      name: "Hooks",
      id: "hooks",
      children: [
        {
          name: "Memory\nManagement",
          id: "memory-hooks",
          children: [
            { name: "enable_sequential_cpu_offload (Layer-by-layer offload)", id: "cpu-offload", url: "https://huggingface.co/docs/diffusers/optimization/memory" },
            { name: "enable_model_cpu_offload (Full model offload)", id: "model-offload", url: "https://huggingface.co/docs/diffusers/optimization/memory" },
            { name: "enable_group_offload (Block-level GPU/CPU swap)", id: "group-offload", url: "https://huggingface.co/docs/diffusers/optimization/memory" },
            { name: "enable_attention_slicing (Chunked attention)", id: "attn-slicing", url: "https://huggingface.co/docs/diffusers/optimization/memory" },
            { name: "enable_vae_slicing (Batch decode in slices)", id: "vae-slicing", url: "https://huggingface.co/docs/diffusers/optimization/memory" },
            { name: "enable_vae_tiling (Tile-based VAE decode for large images)", id: "vae-tiling", url: "https://huggingface.co/docs/diffusers/optimization/memory" },
            { name: "torch.cuda.empty_cache (Manual GPU memory cleanup)", id: "empty-cache", url: "https://pytorch.org/docs/stable/generated/torch.cuda.empty_cache.html" },
            { name: "Gradient Checkpointing (Trade compute for memory)", id: "gradient-checkpoint", url: "https://huggingface.co/docs/diffusers/optimization/memory" },
            { name: "enable_layerwise_casting (FP8/FP16 per-layer precision)", id: "layerwise-casting", url: "https://huggingface.co/docs/diffusers/optimization/memory" },
            { name: "enable_group_offload (leaf_level — fine-grained offload)", id: "group-offload-leaf", url: "https://huggingface.co/docs/diffusers/optimization/memory" },
          ]
        },
        {
          name: "Speed\nOptimization",
          id: "speed-hooks",
          children: [
            { name: "FP8 LayerWise Hooks (Dynamic quantization per layer)", id: "fp8-hooks", url: "https://huggingface.co/docs/diffusers/optimization/memory" },
            { name: "Pyramid Attention Broadcast (PAB) — Step-aware caching", id: "pyramid-attn", year: 2024, url: "https://arxiv.org/abs/2408.12588" },
            { name: "First Block Cache (FBCache) — Cache first transformer block", id: "fbcache", url: "https://huggingface.co/docs/diffusers/optimization/cache" },
            { name: "Token Merging Hooks (ToMe integration)", id: "tome-hooks", year: 2023, url: "https://arxiv.org/abs/2303.17604" },
            { name: "SDP Attention (Scaled Dot Product Attention)", id: "sdp-attention", url: "https://pytorch.org/docs/stable/generated/torch.nn.functional.scaled_dot_product_attention.html" },
            { name: "Layer Skipping Hooks", id: "layer-skip", url: "https://huggingface.co/docs/diffusers/optimization/memory" },
            { name: "enable_xformers_memory_efficient_attention", id: "xformers-hook", url: "https://huggingface.co/docs/diffusers/optimization/xformers" },
            { name: "SageAttention: Plug-and-play 8-Bit Attention Hook", id: "sage-attn-hook", year: 2024, url: "https://arxiv.org/abs/2410.02367" },
            { name: "TeaCache: Training-free Attention Cache for Diffusion", id: "teacache-hook", year: 2024, url: "https://arxiv.org/abs/2411.19150" },
          ]
        },
        {
          name: "Custom\nHooks",
          id: "custom-hooks",
          children: [
            { name: "ModelHook (Base class for model hooks)", id: "model-hook-base", url: "https://huggingface.co/docs/diffusers/api/hooks" },
            { name: "AlignDevicesHook (Cross-device tensor management)", id: "align-devices-hook", url: "https://huggingface.co/docs/diffusers/api/hooks" },
            { name: "LayerSkipHook (Dynamically skip transformer layers)", id: "layer-skip-hook", url: "https://huggingface.co/docs/diffusers/api/hooks" },
            { name: "register_forward_hook (PyTorch native hooks)", id: "forward-hook", url: "https://pytorch.org/docs/stable/generated/torch.nn.Module.html#torch.nn.Module.register_forward_hook" },
          ]
        }
      ]
    },
    {
      name: "Processing",
      id: "processing",
      children: [
        {
          name: "Image\nProcessing",
          id: "image-processing",
          children: [
            { name: "VaeImageProcessor (PIL <-> Tensor <-> NumPy)", id: "vae-image-proc", url: "https://huggingface.co/docs/diffusers/api/image_processor" },
            { name: "Image Normalization ([-1,1] <-> [0,1] <-> [0,255])", id: "img-normalize", url: "https://huggingface.co/docs/diffusers/api/image_processor" },
            { name: "Mask Processing (Binary/Grayscale for inpainting)", id: "mask-proc", url: "https://huggingface.co/docs/diffusers/api/image_processor" },
            { name: "Depth Map Processing (MiDaS, DPT)", id: "depth-proc", url: "https://huggingface.co/docs/diffusers/api/image_processor" },
            { name: "Image Resizing and Padding (Center crop, resize)", id: "img-resize", url: "https://huggingface.co/docs/diffusers/api/image_processor" },
            { name: "ControlNet Image Preprocessing (Canny, OpenPose, etc.)", id: "controlnet-preprocess", url: "https://huggingface.co/docs/diffusers/using-diffusers/controlnet" },
            { name: "IPAdapterMaskProcessor (Regional IP-Adapter masks)", id: "ip-mask-proc", url: "https://huggingface.co/docs/diffusers/using-diffusers/ip_adapter" },
          ]
        },
        {
          name: "Video\nProcessing",
          id: "video-processing",
          children: [
            { name: "VideoProcessor (Frame extraction and batching)", id: "video-proc", url: "https://huggingface.co/docs/diffusers/api/video_processor" },
            { name: "Tensor to Video conversion (frames -> video)", id: "tensor-to-video", url: "https://huggingface.co/docs/diffusers/api/video_processor" },
            { name: "GIF Export (export_to_gif)", id: "gif-export", url: "https://huggingface.co/docs/diffusers/api/utilities" },
            { name: "MP4 Export (export_to_video)", id: "mp4-export", url: "https://huggingface.co/docs/diffusers/api/utilities" },
            { name: "Frame Interpolation Preprocessing", id: "frame-interp", url: "https://huggingface.co/docs/diffusers/api/video_processor" },
          ]
        },
        {
          name: "Callbacks",
          id: "callbacks",
          children: [
            { name: "PipelineCallback (Step-level hooks during generation)", id: "pipeline-callback", url: "https://huggingface.co/docs/diffusers/using-diffusers/callback" },
            { name: "MultiPipelineCallbacks (Compose multiple callbacks)", id: "multi-callback", url: "https://huggingface.co/docs/diffusers/using-diffusers/callback" },
            { name: "Latent Preview Callback (Real-time denoising visualization)", id: "latent-preview", url: "https://huggingface.co/docs/diffusers/using-diffusers/callback" },
            { name: "SDXLCFGCutoffCallback (Stop CFG at certain step)", id: "cfg-cutoff-callback", url: "https://huggingface.co/docs/diffusers/using-diffusers/callback" },
            { name: "IPAdapterScaleCutoffCallback", id: "ip-scale-callback", url: "https://huggingface.co/docs/diffusers/using-diffusers/callback" },
            { name: "Custom Step Logging / Progress Tracking", id: "step-logging", url: "https://huggingface.co/docs/diffusers/using-diffusers/callback" },
            { name: "Interrupt Callback (Early stopping)", id: "interrupt-callback", url: "https://huggingface.co/docs/diffusers/using-diffusers/callback" },
            { name: "FreeU Callback (Free Lunch for UNet features)", id: "freeu-callback", year: 2023, month: 9, url: "https://arxiv.org/abs/2309.11497" },
          ]
        }
      ]
    },
    {
      name: "Training",
      id: "training",
      children: [
        {
          name: "Optimizers &\nLR Schedules",
          id: "optimizers",
          children: [
            { name: "Constant LR with Warmup", id: "constant-warmup", url: "https://huggingface.co/docs/diffusers/api/optimization" },
            { name: "Cosine Annealing Schedule", id: "cosine-anneal", url: "https://huggingface.co/docs/diffusers/api/optimization" },
            { name: "Cosine Annealing with Restarts", id: "cosine-restarts", url: "https://huggingface.co/docs/diffusers/api/optimization" },
            { name: "Linear Warmup + Linear Decay", id: "linear-warmup", url: "https://huggingface.co/docs/diffusers/api/optimization" },
            { name: "Polynomial Decay Schedule", id: "poly-decay", url: "https://huggingface.co/docs/diffusers/api/optimization" },
            { name: "Piecewise Constant Schedule", id: "piecewise-constant", url: "https://huggingface.co/docs/diffusers/api/optimization" },
            { name: "AdamW Optimizer (Default for diffusion training)", id: "adamw", url: "https://pytorch.org/docs/stable/generated/torch.optim.AdamW.html" },
            { name: "Prodigy Optimizer (Adaptive learning rate)", id: "prodigy", year: 2023, url: "https://arxiv.org/abs/2306.06101" },
            { name: "8-bit Adam (bitsandbytes)", id: "adam8bit", year: 2022, url: "https://arxiv.org/abs/2110.02861" },
            { name: "CAME: Confidence-guided Adaptive Memory Efficient Optimization", id: "came", year: 2023, month: 7, url: "https://arxiv.org/abs/2307.02047" },
            { name: "AdaFactor: Adaptive Learning Rates with Sublinear Memory Cost", id: "adafactor", year: 2018, url: "https://arxiv.org/abs/1804.04235" },
          ]
        },
        {
          name: "Training\nUtilities",
          id: "training-utils",
          children: [
            { name: "EMAModel (Exponential Moving Average of weights)", id: "ema", url: "https://huggingface.co/docs/diffusers/api/training" },
            { name: "Min-SNR Weighting (Efficient Diffusion Training)", id: "snr-weighting", year: 2023, month: 3, url: "https://arxiv.org/abs/2303.09556" },
            { name: "Noise Offset (Better dark/light image generation)", id: "noise-offset", url: "https://www.crosslabs.org/blog/diffusion-with-offset-noise" },
            { name: "Input Perturbation (Improved training stability)", id: "input-perturbation", year: 2023, month: 1, url: "https://arxiv.org/abs/2301.11706" },
            { name: "Compute SNR (Signal-to-Noise Ratio utilities)", id: "compute-snr", url: "https://huggingface.co/docs/diffusers/api/training" },
            { name: "Prior Preservation Loss (DreamBooth regularization)", id: "prior-preservation", year: 2022, month: 8, url: "https://arxiv.org/abs/2208.12242" },
            { name: "Gradient Accumulation", id: "grad-accumulation", url: "https://huggingface.co/docs/accelerate/usage_guides/gradient_accumulation" },
            { name: "Mixed Precision Training (FP16 / BF16)", id: "mixed-precision-training", url: "https://huggingface.co/docs/diffusers/training/overview" },
          ]
        },
        {
          name: "Fine-tuning\nMethods",
          id: "finetuning-methods",
          children: [
            { name: "Full Fine-tuning (All parameters)", id: "full-finetune", url: "https://huggingface.co/docs/diffusers/training/text2image" },
            { name: "DreamBooth: Subject-Driven Generation", id: "dreambooth", year: 2022, month: 8, url: "https://arxiv.org/abs/2208.12242" },
            { name: "DreamBooth with LoRA", id: "dreambooth-lora", url: "https://huggingface.co/docs/diffusers/training/dreambooth" },
            { name: "LoRA Training (Low-Rank Adaptation)", id: "lora-training", url: "https://huggingface.co/docs/diffusers/training/lora" },
            { name: "Textual Inversion Training", id: "ti-training", url: "https://huggingface.co/docs/diffusers/training/text_inversion" },
            { name: "Custom Diffusion: Multi-Concept Customization", id: "custom-diffusion", year: 2022, month: 12, url: "https://arxiv.org/abs/2212.04488" },
            { name: "ControlNet Training", id: "controlnet-training", url: "https://huggingface.co/docs/diffusers/training/controlnet" },
            { name: "T2I-Adapter Training", id: "t2i-adapter-training", url: "https://huggingface.co/docs/diffusers/training/t2i_adapters" },
            { name: "InstructPix2Pix Training", id: "instruct-pix2pix-training", url: "https://huggingface.co/docs/diffusers/training/instructpix2pix" },
            { name: "SDXL Fine-tuning", id: "sdxl-training", url: "https://huggingface.co/docs/diffusers/training/sdxl" },
            { name: "FLUX LoRA Fine-tuning", id: "flux-lora-training", url: "https://huggingface.co/docs/diffusers/training/flux" },
            { name: "FLUX DreamBooth Fine-tuning", id: "flux-dreambooth", url: "https://huggingface.co/docs/diffusers/training/flux" },
            { name: "Flow Matching Training (v-prediction for flows)", id: "flow-match-training", url: "https://huggingface.co/docs/diffusers/training/flow_matching" },
            { name: "QLoRA Fine-tuning for Diffusion Models", id: "qlora-training", year: 2023, month: 5, url: "https://arxiv.org/abs/2305.14314" },
          ]
        },
        {
          name: "Advanced\nTraining",
          id: "advanced-training",
          children: [
            { name: "DDPO: Training Diffusion Models with Reinforcement Learning", id: "ddpo", year: 2023, month: 5, url: "https://arxiv.org/abs/2305.13301" },
            { name: "DRaFT: Differentiable Reward for Fine-Tuning Diffusion", id: "draft-training", year: 2023, month: 9, url: "https://arxiv.org/abs/2309.17400" },
            { name: "LCM-LoRA: Universal Stable Diffusion Distillation", id: "lcm-lora-training", year: 2023, month: 11, url: "https://arxiv.org/abs/2311.05556" },
            { name: "Accelerate: Multi-GPU / TPU Training Library", id: "accelerate", url: "https://huggingface.co/docs/accelerate" },
            { name: "DeepSpeed ZeRO Integration", id: "deepspeed", url: "https://huggingface.co/docs/accelerate/usage_guides/deepspeed" },
            { name: "Unconditional Image Generation Training", id: "unconditional-training", url: "https://huggingface.co/docs/diffusers/training/unconditional_training" },
            { name: "Wuerstchen Training (Stage C Decoder)", id: "wuerstchen-training", url: "https://huggingface.co/docs/diffusers/training/wuerstchen" },
            { name: "GaLore: Memory-Efficient LLM Training by Gradient Low-Rank Projection", id: "galore", year: 2024, month: 3, url: "https://arxiv.org/abs/2403.03507" },
            { name: "Video-DPO: Omni-Preference Alignment for Video Diffusion", id: "video-dpo", year: 2025, month: 2, url: "https://arxiv.org/abs/2502.10248" },
          ]
        }
      ]
    },
    {
      name: "Utilities",
      id: "utilities",
      children: [
        {
          name: "Configuration",
          id: "config-utils",
          children: [
            { name: "ConfigMixin (JSON-based model config)", id: "config-mixin", url: "https://huggingface.co/docs/diffusers/api/configuration" },
            { name: "register_to_config (Auto-serialization decorator)", id: "register-config", url: "https://huggingface.co/docs/diffusers/api/configuration" },
            { name: "FrozenDict (Immutable config dictionaries)", id: "frozen-dict", url: "https://huggingface.co/docs/diffusers/api/configuration" },
            { name: "model_index.json (Pipeline component registry)", id: "model-index", url: "https://huggingface.co/docs/diffusers/api/configuration" },
            { name: "scheduler_config.json (Scheduler parameters)", id: "scheduler-config", url: "https://huggingface.co/docs/diffusers/api/configuration" },
          ]
        },
        {
          name: "Device &\nRuntime",
          id: "device-utils",
          children: [
            { name: "CUDA / MPS / XPU / NPU Device Detection", id: "device-detect", url: "https://huggingface.co/docs/diffusers/optimization/torch2.0" },
            { name: "torch.compile Integration (Inductor backend)", id: "compile-support", url: "https://huggingface.co/docs/diffusers/optimization/torch2.0" },
            { name: "Mixed Precision Inference (FP16 / BF16 / FP8)", id: "mixed-precision", url: "https://huggingface.co/docs/diffusers/optimization/fp16" },
            { name: "xFormers Memory-Efficient Attention", id: "xformers", url: "https://huggingface.co/docs/diffusers/optimization/xformers" },
            { name: "Scaled Dot Product Attention (SDPA / PyTorch 2.0)", id: "sdpa", url: "https://huggingface.co/docs/diffusers/optimization/torch2.0" },
            { name: "torch.channels_last Memory Format", id: "channels-last", url: "https://pytorch.org/tutorials/intermediate/memory_format_tutorial.html" },
            { name: "Deterministic Generation (Generator seed control)", id: "deterministic", url: "https://huggingface.co/docs/diffusers/using-diffusers/reusing_seeds" },
            { name: "torch.compile fullgraph mode (Full-graph compilation)", id: "compile-fullgraph-util", url: "https://huggingface.co/docs/diffusers/optimization/torch2.0" },
            { name: "FP8 Layerwise Casting (Per-layer precision control)", id: "fp8-layerwise-util", url: "https://huggingface.co/docs/diffusers/optimization/memory" },
            { name: "Multi-GPU Inference (Device placement strategies)", id: "multi-gpu", url: "https://huggingface.co/docs/diffusers/optimization/memory" },
          ]
        },
        {
          name: "Logging &\nDebugging",
          id: "logging-utils",
          children: [
            { name: "diffusers.logging (Set log verbosity)", id: "logging", url: "https://huggingface.co/docs/diffusers/api/logging" },
            { name: "Deprecation Warnings", id: "deprecation-warn", url: "https://huggingface.co/docs/diffusers/api/utilities" },
            { name: "is_torch_available / is_xformers_available (Import checks)", id: "import-checks", url: "https://huggingface.co/docs/diffusers/api/utilities" },
            { name: "randn_tensor (Cross-device random tensor generation)", id: "randn-tensor", url: "https://huggingface.co/docs/diffusers/api/utilities" },
          ]
        },
        {
          name: "CLI\nCommands",
          id: "cli-commands",
          children: [
            { name: "diffusers-cli env (Print environment info)", id: "cli-env", url: "https://huggingface.co/docs/diffusers/api/utilities" },
            { name: "diffusers-cli fp16_safetensors (Convert weights to FP16)", id: "cli-fp16", url: "https://huggingface.co/docs/diffusers/api/utilities" },
            { name: "Hugging Face CLI (huggingface-cli login/download)", id: "hf-cli", url: "https://huggingface.co/docs/huggingface_hub/guides/cli" },
          ]
        },
        {
          name: "Experimental",
          id: "experimental",
          children: [
            { name: "RL for Diffusion (DDPO / DRaFT)", id: "rl-diffusion", year: 2023, month: 5, url: "https://arxiv.org/abs/2305.13301" },
            { name: "Unstable / Bleeding-Edge Features", id: "bleeding-edge", url: "https://huggingface.co/docs/diffusers/api/experimental" },
            { name: "FreeInit: Bridging Initialization Gap in Video Diffusion", id: "freeinit", year: 2023, month: 12, url: "https://arxiv.org/abs/2312.07537" },
            { name: "FreeNoise: Tuning-Free Longer Video Diffusion", id: "freenoise", year: 2024, month: 10, url: "https://arxiv.org/abs/2310.15169" },
            { name: "Diffusion Forcing: Next-token Prediction Meets Full-Sequence Diffusion", id: "diffusion-forcing", year: 2024, month: 7, url: "https://arxiv.org/abs/2407.01392" },
            { name: "Rectified Consistency Models (rCM)", id: "rcm", year: 2025, url: "https://arxiv.org/abs/2410.18088" },
          ]
        }
      ]
    }
  ]
};
