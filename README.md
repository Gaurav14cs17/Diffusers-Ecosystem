# Diffusers-Ecosystem

[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://gaurav14cs17.github.io/diffusers/)
[![License](https://img.shields.io/badge/License-Apache%202.0-green?style=for-the-badge)](LICENSE)
[![Author](https://img.shields.io/badge/Author-Gaurav14cs17-purple?style=for-the-badge&logo=github)](https://github.com/Gaurav14cs17)

A comprehensive map of the diffusion model ecosystem — models, schedulers, pipelines, and their foundational papers — organized by category and sorted chronologically.

## Live Interactive Website

**[→ Open Interactive Explorer ←](https://gaurav14cs17.github.io/diffusers/)**

Click any node to navigate through the hierarchy. Scroll to zoom, drag to pan.

---

## Table of Contents

- [00 Foundations](#00-foundations)
- [01 Models](#01-models)
- [02 Schedulers](#02-schedulers)
- [03 Guiders](#03-guiders)
- [04 Pipelines](#04-pipelines)
- [05 Modular Pipelines](#05-modular-pipelines)
- [06 Loaders](#06-loaders)
- [07 Quantizers](#07-quantizers)
- [08 Hooks](#08-hooks)
- [09 Processing](#09-processing)
- [10 Training](#10-training)
- [11 Utilities](#11-utilities)
- [References (Continuously Updated)](#references-continuously-updated)

---

## 00 Foundations

### Diffusion Theory

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Deep Unsupervised Learning using Nonequilibrium Thermodynamics | 2015 | Mar | [arXiv](https://arxiv.org/abs/1503.03585) |
| Generative Modeling by Estimating Gradients of Data Distribution (Score Matching) | 2019 | Jul | [arXiv](https://arxiv.org/abs/1907.05600) |
| Denoising Diffusion Probabilistic Models (DDPM) | 2020 | Jun | [arXiv](https://arxiv.org/abs/2006.11239) |
| Score-Based Generative Modeling through Stochastic Differential Equations | 2020 | Nov | [arXiv](https://arxiv.org/abs/2011.13456) |
| Improved Denoising Diffusion Probabilistic Models | 2021 | Feb | [arXiv](https://arxiv.org/abs/2102.09672) |
| Variational Diffusion Models | 2021 | Jul | [arXiv](https://arxiv.org/abs/2107.00630) |
| Elucidating the Design Space of Diffusion-Based Generative Models (EDM) | 2022 | Jun | [arXiv](https://arxiv.org/abs/2206.00364) |
| Understanding Diffusion Objectives as the ELBO with Simple Data Augmentation | 2023 | Mar | [arXiv](https://arxiv.org/abs/2303.00848) |

### Latent Diffusion

| Paper | Year | Month | Link |
|-------|------|-------|------|
| High-Resolution Image Synthesis with Latent Diffusion Models (LDM) | 2021 | Dec | [arXiv](https://arxiv.org/abs/2112.10752) |
| GLIDE: Towards Photorealistic Image Generation and Editing with Text-Guided Diffusion | 2021 | Dec | [arXiv](https://arxiv.org/abs/2112.10741) |
| Hierarchical Text-Conditional Image Generation with CLIP Latents (DALL-E 2) | 2022 | Apr | [arXiv](https://arxiv.org/abs/2204.06125) |
| Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding (Imagen) | 2022 | May | [arXiv](https://arxiv.org/abs/2205.11487) |

### Flow Matching Theory

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Flow Straight and Fast: Learning to Generate and Transfer Data with Rectified Flow | 2022 | Sep | [arXiv](https://arxiv.org/abs/2209.03003) |
| Flow Matching for Generative Modeling | 2022 | Oct | [arXiv](https://arxiv.org/abs/2210.02747) |
| Conditional Flow Matching: Simulation-Free Dynamic Optimal Transport | 2023 | Feb | [arXiv](https://arxiv.org/abs/2302.00482) |
| Stochastic Interpolants: A Unifying Framework for Flows and Diffusions | 2023 | Mar | [arXiv](https://arxiv.org/abs/2303.08797) |
| Scaling Rectified Flow Transformers for High-Resolution Image Synthesis (SD3) | 2024 | Mar | [arXiv](https://arxiv.org/abs/2403.03206) |

### Guidance Theory

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Diffusion Models Beat GANs on Image Synthesis (Classifier Guidance) | 2021 | May | [arXiv](https://arxiv.org/abs/2105.05233) |
| Classifier-Free Diffusion Guidance | 2022 | Jul | [arXiv](https://arxiv.org/abs/2207.12598) |
| On the Importance of Noise Scheduling for Diffusion Models | 2023 | Jan | [arXiv](https://arxiv.org/abs/2301.10972) |
| Common Diffusion Noise Schedules and Sample Steps are Flawed | 2023 | May | [arXiv](https://arxiv.org/abs/2305.08891) |

---

## 01 Models

### UNet

| Paper | Year | Month | Link |
|-------|------|-------|------|
| U-Net: Convolutional Networks for Biomedical Image Segmentation (Original) | 2015 | May | [arXiv](https://arxiv.org/abs/1505.04597) |
| Denoising Diffusion Probabilistic Models (UNet2DModel) | 2020 | Jun | [arXiv](https://arxiv.org/abs/2006.11239) |
| High-Resolution Image Synthesis with LDM (UNet2DConditionModel) | 2021 | Dec | [arXiv](https://arxiv.org/abs/2112.10752) |
| Align your Latents: Video Diffusion (UNet3DConditionModel) | 2023 | Apr | [arXiv](https://arxiv.org/abs/2304.08818) |
| ControlNet: Adding Conditional Control to Text-to-Image Diffusion Models | 2023 | Feb | [arXiv](https://arxiv.org/abs/2302.05543) |
| AnimateDiff: Animate Your Personalized T2I Models (UNetMotionModel) | 2023 | Jul | [arXiv](https://arxiv.org/abs/2307.04725) |
| SDXL: Improving Latent Diffusion Models for High-Resolution Synthesis | 2023 | Jul | [arXiv](https://arxiv.org/abs/2307.01952) |
| IP-Adapter: Text Compatible Image Prompt Adapter for Text-to-Image Diffusion | 2023 | Aug | [arXiv](https://arxiv.org/abs/2308.06721) |
| Stable Video Diffusion: Scaling Latent Video Diffusion (UNetSpatioTemporal) | 2023 | Nov | [arXiv](https://arxiv.org/abs/2311.15127) |
| I2VGen-XL: High-Quality Image-to-Video Synthesis via Cascaded Diffusion | 2023 | Nov | [arXiv](https://arxiv.org/abs/2311.04145) |

### VAE

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Auto-Encoding Variational Bayes (Original VAE) | 2013 | Dec | [arXiv](https://arxiv.org/abs/1312.6114) |
| Neural Discrete Representation Learning (VQ-VAE) | 2017 | Nov | [arXiv](https://arxiv.org/abs/1711.00937) |
| Generating Diverse High-Fidelity Images with VQ-VAE-2 | 2019 | Jun | [arXiv](https://arxiv.org/abs/1906.00446) |
| Taming Transformers for High-Resolution Image Synthesis (VQGAN) | 2020 | Dec | [arXiv](https://arxiv.org/abs/2012.09841) |
| AutoencoderKL (Stable Diffusion VAE) | 2021 | Dec | [arXiv](https://arxiv.org/abs/2112.10752) |
| Asymmetric VQGAN (Inpainting VAE) | 2022 | Jun | [arXiv](https://arxiv.org/abs/2306.04632) |
| Tiny AutoEncoder for Stable Diffusion (TAESD) | 2023 | — | [GitHub](https://github.com/madebyollin/taesd) |
| Consistency Decoder (OpenAI) | 2023 | Nov | [GitHub](https://github.com/openai/consistencydecoder) |
| AutoencoderKLTemporalDecoder (SVD VAE) | 2023 | Nov | [arXiv](https://arxiv.org/abs/2311.15127) |
| AutoencoderKLCogVideoX (Video VAE) | 2024 | Aug | [arXiv](https://arxiv.org/abs/2408.06072) |
| AutoencoderDC (Deep Compression Autoencoder for SANA) | 2024 | Oct | [arXiv](https://arxiv.org/abs/2410.10733) |
| AutoencoderOobleck (Audio Spectrogram VAE) | 2024 | — | [Docs](https://huggingface.co/docs/diffusers/api/models/autoencoderoobleck) |
| AutoencoderKLHunyuanVideo (Causal 3D VAE) | 2024 | Dec | [arXiv](https://arxiv.org/abs/2412.03603) |
| AutoencoderKLWan (Wan Video VAE) | 2025 | Mar | [arXiv](https://arxiv.org/abs/2503.20314) |

### Transformers (DiT)

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Scalable Diffusion Models with Transformers (DiT) | 2022 | Dec | [arXiv](https://arxiv.org/abs/2212.09748) |
| PixArt-α: Fast Training of Diffusion Transformer for Photorealistic Text-to-Image | 2023 | Oct | [arXiv](https://arxiv.org/abs/2310.00426) |
| PixArt-Σ: Weak-to-Strong Training of Diffusion Transformer for 4K Generation | 2024 | Mar | [arXiv](https://arxiv.org/abs/2403.04692) |
| Scalable Interpolant Transformers (SiT) | 2024 | Jan | [arXiv](https://arxiv.org/abs/2401.08740) |
| Scaling Rectified Flow Transformers for High-Resolution Image Synthesis (SD3 / MM-DiT) | 2024 | Mar | [arXiv](https://arxiv.org/abs/2403.03206) |
| CogView3: Finer and Faster Text-to-Image via Relay Diffusion | 2024 | Mar | [arXiv](https://arxiv.org/abs/2403.05121) |
| Hunyuan-DiT: A Powerful Multi-Resolution Diffusion Transformer | 2024 | May | [arXiv](https://arxiv.org/abs/2405.11427) |
| Lumina-T2X: Transforming Text into Any Modality via Flow-based Large DiT | 2024 | May | [arXiv](https://arxiv.org/abs/2405.05945) |
| Lumina-Next: Making Lumina-T2X Stronger and Faster with Next-DiT | 2024 | Jun | [arXiv](https://arxiv.org/abs/2406.18583) |
| AuraFlow: Flow-based Diffusion Transformer | 2024 | Jul | [Blog](https://blog.fal.ai/auraflow/) |
| FLUX.1 (Rectified Flow Transformer) | 2024 | Aug | [BFL](https://blackforestlabs.ai/announcing-black-forest-labs/) |
| SANA: Efficient High-Resolution Image Synthesis with Linear DiT | 2024 | Oct | [arXiv](https://arxiv.org/abs/2410.10733) |
| Latte: Latent Diffusion Transformer for Videos | 2024 | Jan | [arXiv](https://arxiv.org/abs/2401.03048) |

### Video Models

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Video Diffusion Models | 2022 | Apr | [arXiv](https://arxiv.org/abs/2204.03458) |
| Make-A-Video: Text-to-Video Generation without Text-Video Data | 2022 | Sep | [arXiv](https://arxiv.org/abs/2209.14792) |
| Align your Latents: High-Resolution Video Synthesis with Latent Diffusion | 2023 | Apr | [arXiv](https://arxiv.org/abs/2304.08818) |
| AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models | 2023 | Jul | [arXiv](https://arxiv.org/abs/2307.04725) |
| Stable Video Diffusion (SVD) | 2023 | Nov | [arXiv](https://arxiv.org/abs/2311.15127) |
| CogVideoX: Text-to-Video Diffusion Models with An Expert Transformer | 2024 | Aug | [arXiv](https://arxiv.org/abs/2408.06072) |
| Mochi 1: High-Fidelity Video Generation Model | 2024 | Oct | [Blog](https://www.genmo.ai/blog/mochi-1) |
| Allegro: Open-Source Video Generation Model | 2024 | Oct | [arXiv](https://arxiv.org/abs/2410.15458) |
| LTX-Video: Realtime Video Latent Diffusion | 2024 | Nov | [arXiv](https://arxiv.org/abs/2501.00103) |
| HunyuanVideo: A Systematic Framework for Large Video Generative Models | 2024 | Dec | [arXiv](https://arxiv.org/abs/2412.03603) |
| Open-Sora: Democratizing Efficient Video Production for All | 2024 | — | [arXiv](https://arxiv.org/abs/2412.00131) |
| Wan: Open and Advanced Large-Scale Video Generative Models | 2025 | Mar | [arXiv](https://arxiv.org/abs/2503.20314) |

### Prior & Cascade Models

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Cascaded Diffusion Models for High Fidelity Image Generation | 2021 | Jun | [arXiv](https://arxiv.org/abs/2106.15282) |
| Hierarchical Text-Conditional Image Generation with CLIP Latents (DALL-E 2 / unCLIP) | 2022 | Apr | [arXiv](https://arxiv.org/abs/2204.06125) |
| eDiff-I: Text-to-Image Diffusion Models with Ensemble of Expert Denoisers | 2022 | Nov | [arXiv](https://arxiv.org/abs/2211.01324) |
| DeepFloyd IF (Pixel-Space Cascaded Diffusion) | 2023 | Apr | [GitHub](https://github.com/deep-floyd/IF) |
| Würstchen: An Efficient Architecture for Large-Scale Text-to-Image Diffusion | 2023 | Jun | [arXiv](https://arxiv.org/abs/2306.00637) |
| Kandinsky: Text-to-Image Generation via Latent Diffusion | 2023 | Oct | [arXiv](https://arxiv.org/abs/2310.03502) |

### Text Encoders

| Paper | Year | Month | Link |
|-------|------|-------|------|
| BERT: Pre-training of Deep Bidirectional Transformers | 2018 | Oct | [arXiv](https://arxiv.org/abs/1810.04805) |
| Exploring the Limits of Transfer Learning with a Unified T5 Model | 2019 | Oct | [arXiv](https://arxiv.org/abs/1910.10683) |
| Learning Transferable Visual Models From Natural Language Supervision (CLIP) | 2021 | Feb | [arXiv](https://arxiv.org/abs/2103.00020) |
| OpenCLIP: An Open Source Implementation of CLIP | 2022 | — | [GitHub](https://github.com/mlfoundations/open_clip) |
| Sigmoid Loss for Language Image Pre-Training (SigLIP) | 2023 | Mar | [arXiv](https://arxiv.org/abs/2303.15343) |
| Gemma: Open Models Based on Gemini Research and Technology | 2024 | Feb | [arXiv](https://arxiv.org/abs/2403.08295) |

### Attention Blocks

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Attention Is All You Need (Transformer) | 2017 | Jun | [arXiv](https://arxiv.org/abs/1706.03762) |
| Memory Efficient Attention (Rabe & Staats) | 2021 | Dec | [arXiv](https://arxiv.org/abs/2112.05682) |
| High-Resolution Image Synthesis with LDM (Cross-Attention Conditioning) | 2021 | Dec | [arXiv](https://arxiv.org/abs/2112.10752) |
| FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness | 2022 | May | [arXiv](https://arxiv.org/abs/2205.14135) |
| Prompt-to-Prompt Image Editing with Cross Attention Control | 2022 | Aug | [arXiv](https://arxiv.org/abs/2208.01626) |
| xFormers: A Modular and Hackable Transformer Modelling Library | 2022 | — | [GitHub](https://github.com/facebookresearch/xformers) |
| Attend-and-Excite: Attention-Based Semantic Guidance for Text-to-Image | 2023 | Jan | [arXiv](https://arxiv.org/abs/2301.13826) |
| FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning | 2023 | Jul | [arXiv](https://arxiv.org/abs/2307.08691) |

---

## 02 Schedulers

### Denoising Schedulers

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Denoising Diffusion Probabilistic Models (DDPMScheduler) | 2020 | Jun | [arXiv](https://arxiv.org/abs/2006.11239) |
| Denoising Diffusion Implicit Models (DDIMScheduler) | 2020 | Oct | [arXiv](https://arxiv.org/abs/2010.02502) |
| Score-Based Generative Modeling through SDEs (ScoreSdeVe / ScoreSdeVp) | 2020 | Nov | [arXiv](https://arxiv.org/abs/2011.13456) |
| Pseudo Numerical Methods for Diffusion Models (PNDMScheduler) | 2022 | Feb | [arXiv](https://arxiv.org/abs/2202.09778) |
| Improved PNDM (IPNDMScheduler) | 2022 | Feb | [arXiv](https://arxiv.org/abs/2202.09778) |
| ParaDiGMS: Parallel Denoising (DDPMParallelScheduler / DDIMParallelScheduler) | 2023 | May | [arXiv](https://arxiv.org/abs/2305.16317) |

### Fast Samplers

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Fast Sampling of Diffusion Models with Exponential Integrator (DEISMultistepScheduler) | 2022 | Apr | [arXiv](https://arxiv.org/abs/2204.13902) |
| DPM-Solver: A Fast ODE Solver for Diffusion Probabilistic Model Sampling | 2022 | Jun | [arXiv](https://arxiv.org/abs/2206.00927) |
| DPM-Solver++: Fast Solver for Guided Sampling of Diffusion Probabilistic Models | 2022 | Nov | [arXiv](https://arxiv.org/abs/2211.01095) |
| UniPC: A Unified Predictor-Corrector Framework for Fast Sampling | 2023 | Feb | [arXiv](https://arxiv.org/abs/2302.04867) |
| SA-Solver: Stochastic Adams Solver for Fast Sampling | 2023 | Sep | [arXiv](https://arxiv.org/abs/2309.05019) |
| DPM-Solver-v3: Improved Diffusion ODE Solver with Empirical Model Statistics | 2023 | Oct | [arXiv](https://arxiv.org/abs/2310.13268) |

### Euler Family

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Elucidating the Design Space of Diffusion-Based Generative Models (EDM) — EulerDiscreteScheduler | 2022 | Jun | [arXiv](https://arxiv.org/abs/2206.00364) |
| EulerAncestralDiscreteScheduler (Ancestral sampling variant) | 2022 | Jun | [arXiv](https://arxiv.org/abs/2206.00364) |
| HeunDiscreteScheduler (2nd order Heun's method) | 2022 | Jun | [arXiv](https://arxiv.org/abs/2206.00364) |
| KDPM2DiscreteScheduler (Katherine Crowson's DPM2) | 2022 | Jun | [arXiv](https://arxiv.org/abs/2206.00364) |
| KDPM2AncestralDiscreteScheduler (Ancestral DPM2 variant) | 2022 | Jun | [arXiv](https://arxiv.org/abs/2206.00364) |
| LMSDiscreteScheduler (Linear Multistep method) | 2022 | Jun | [arXiv](https://arxiv.org/abs/2206.00364) |
| EDMEulerScheduler (EDM framework Euler) | 2022 | Jun | [arXiv](https://arxiv.org/abs/2206.00364) |
| EDMDPMSolverMultistepScheduler (EDM + DPM combined) | 2022 | Jun | [arXiv](https://arxiv.org/abs/2206.00364) |

### Flow Matching

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Flow Matching for Generative Modeling (FlowMatchEulerDiscreteScheduler) | 2022 | Oct | [arXiv](https://arxiv.org/abs/2210.02747) |
| FlowMatchHeunDiscreteScheduler (2nd order flow) | 2022 | Oct | [arXiv](https://arxiv.org/abs/2210.02747) |
| Flow Straight and Fast (Rectified Flow) | 2022 | Sep | [arXiv](https://arxiv.org/abs/2209.03003) |
| Stable Diffusion 3 Flow Matching Scheduler | 2024 | Mar | [arXiv](https://arxiv.org/abs/2403.03206) |
| FLUX Flow Matching Scheduler | 2024 | Aug | [BFL](https://blackforestlabs.ai/) |
| CosineDPMSolverMultistepScheduler (Cosine schedule for flow) | 2024 | — | [Docs](https://huggingface.co/docs/diffusers/api/schedulers/cosine_dpm) |

### Consistency & Distillation

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Progressive Distillation for Fast Sampling of Diffusion Models | 2022 | Feb | [arXiv](https://arxiv.org/abs/2202.00512) |
| Consistency Models | 2023 | Mar | [arXiv](https://arxiv.org/abs/2303.01469) |
| InstaFlow: One Step is Enough for High-Quality Diffusion-Based T2I Generation | 2023 | Sep | [arXiv](https://arxiv.org/abs/2309.06380) |
| Latent Consistency Models: Synthesizing High-Res Images with Few-Step Inference | 2023 | Oct | [arXiv](https://arxiv.org/abs/2310.04378) |
| Adversarial Diffusion Distillation (SDXL Turbo) | 2023 | Nov | [arXiv](https://arxiv.org/abs/2311.17042) |
| Improved Consistency Models (iCM) | 2024 | Jan | [arXiv](https://arxiv.org/abs/2310.14189) |
| Trajectory Consistency Distillation (TCDScheduler) | 2024 | Feb | [arXiv](https://arxiv.org/abs/2402.19159) |
| SDXL-Lightning: Progressive Adversarial Diffusion Distillation | 2024 | Feb | [arXiv](https://arxiv.org/abs/2402.13929) |
| DMD2: Improved Distribution Matching Distillation for Few-Step Generation | 2024 | May | [arXiv](https://arxiv.org/abs/2405.14867) |

### Noise Schedules

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Denoising Diffusion Probabilistic Models (Linear Beta Schedule) | 2020 | Jun | [arXiv](https://arxiv.org/abs/2006.11239) |
| Improved DDPM (Cosine Beta Schedule) | 2021 | Feb | [arXiv](https://arxiv.org/abs/2102.09672) |
| High-Resolution Image Synthesis with LDM (Scaled Linear Schedule) | 2021 | Dec | [arXiv](https://arxiv.org/abs/2112.10752) |
| Progressive Distillation for Fast Sampling (v-prediction Parameterization) | 2022 | Feb | [arXiv](https://arxiv.org/abs/2202.00512) |
| Common Diffusion Noise Schedules are Flawed (Zero Terminal SNR) | 2023 | May | [arXiv](https://arxiv.org/abs/2305.08891) |

---

## 03 Guiders

### Classifier-Free Guidance

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Diffusion Models Beat GANs on Image Synthesis (Classifier Guidance) | 2021 | May | [arXiv](https://arxiv.org/abs/2105.05233) |
| Classifier-Free Diffusion Guidance (CFG) | 2022 | Jul | [arXiv](https://arxiv.org/abs/2207.12598) |
| Dynamic Classifier-Free Guidance | 2023 | May | [arXiv](https://arxiv.org/abs/2305.18739) |
| Rescaled CFG: Prevent Over-Saturation | 2023 | May | [arXiv](https://arxiv.org/abs/2305.08891) |
| Guided Distillation for CFG-Free Models | 2024 | Apr | [arXiv](https://arxiv.org/abs/2404.19114) |

### Perturbed Attention

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Self-Attention Guidance (SAG) | 2022 | Oct | [arXiv](https://arxiv.org/abs/2210.00939) |
| Self-Rectifying Diffusion Sampling with Perturbed-Attention Guidance (PAG) | 2024 | Mar | [arXiv](https://arxiv.org/abs/2403.17377) |
| Smoothed Energy Guidance (SEG) | 2024 | Aug | [arXiv](https://arxiv.org/abs/2408.00760) |

### Adaptive Guidance

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Autoguidance: Self-Guidance for Improved Sample Quality | 2024 | Mar | [arXiv](https://arxiv.org/abs/2403.08849) |
| CFG++: Manifold-constrained Classifier Free Guidance | 2024 | Jun | [arXiv](https://arxiv.org/abs/2406.08070) |
| Adaptive Projected Guidance (APG) | 2024 | Oct | [arXiv](https://arxiv.org/abs/2410.02416) |
| Adaptive Guidance: Training-free Acceleration of Conditional Diffusion Models | 2023 | Dec | [arXiv](https://arxiv.org/abs/2312.12487) |

### Specialized Guidance

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Universal Guidance for Diffusion Models | 2023 | Feb | [arXiv](https://arxiv.org/abs/2302.07121) |
| Tangential Classifier-Free Guidance (TCFG) | 2023 | Dec | [arXiv](https://arxiv.org/abs/2312.00400) |
| Skip Layer Guidance (SLG) | 2024 | Jul | [arXiv](https://arxiv.org/abs/2407.07658) |

---

## 04 Pipelines

### Text-to-Image

| Paper | Year | Month | Link |
|-------|------|-------|------|
| High-Resolution Image Synthesis with LDM (StableDiffusionPipeline) | 2021 | Dec | [arXiv](https://arxiv.org/abs/2112.10752) |
| Hierarchical Text-Conditional Image Generation (UnCLIPPipeline) | 2022 | Apr | [arXiv](https://arxiv.org/abs/2204.06125) |
| DeepFloyd IF Pipeline (Pixel-Space Cascaded) | 2023 | Apr | [GitHub](https://github.com/deep-floyd/IF) |
| Würstchen: Efficient Architecture (WuerstchenPipeline) | 2023 | Jun | [arXiv](https://arxiv.org/abs/2306.00637) |
| SDXL: Improving Latent Diffusion Models (StableDiffusionXLPipeline) | 2023 | Jul | [arXiv](https://arxiv.org/abs/2307.01952) |
| PixArt-α: Fast Training of Diffusion Transformer (PixArtAlphaPipeline) | 2023 | Oct | [arXiv](https://arxiv.org/abs/2310.00426) |
| Kandinsky: Text-to-Image via Prior + Decoder (KandinskyPipeline) | 2023 | Oct | [arXiv](https://arxiv.org/abs/2310.03502) |
| Scaling Rectified Flow Transformers (StableDiffusion3Pipeline) | 2024 | Mar | [arXiv](https://arxiv.org/abs/2403.03206) |
| PixArt-Σ: Weak-to-Strong Training (PixArtSigmaPipeline) | 2024 | Mar | [arXiv](https://arxiv.org/abs/2403.04692) |
| Hunyuan-DiT (HunyuanDiTPipeline) | 2024 | May | [arXiv](https://arxiv.org/abs/2405.11427) |
| Lumina-T2X (LuminaText2ImgPipeline) | 2024 | May | [arXiv](https://arxiv.org/abs/2405.05945) |
| AuraFlow: Flow-based Diffusion Transformer (AuraFlowPipeline) | 2024 | Jul | [Blog](https://blog.fal.ai/auraflow/) |
| FLUX.1 (FluxPipeline) | 2024 | Aug | [BFL](https://blackforestlabs.ai/) |
| SANA: Efficient High-Resolution Synthesis (SanaPipeline) | 2024 | Oct | [arXiv](https://arxiv.org/abs/2410.10733) |

### Image-to-Image

| Paper | Year | Month | Link |
|-------|------|-------|------|
| SDEdit: Guided Image Synthesis and Editing with SDEs | 2021 | Aug | [arXiv](https://arxiv.org/abs/2108.01073) |
| Stable Diffusion Img2Img Pipeline (Strength-based re-noising) | 2022 | — | [arXiv](https://arxiv.org/abs/2112.10752) |
| Stable Diffusion Depth2Img Pipeline | 2022 | — | [Docs](https://huggingface.co/docs/diffusers/api/pipelines/stable_diffusion/depth2img) |
| Stable Diffusion Upscale Pipeline (4x Super-Resolution) | 2022 | — | [Docs](https://huggingface.co/docs/diffusers/api/pipelines/stable_diffusion/upscale) |
| CycleDiffusion: Text-Driven Image-to-Image with Unpaired Data | 2022 | Oct | [arXiv](https://arxiv.org/abs/2210.05559) |
| DiffEdit: Diffusion-based Semantic Image Editing with Mask Guidance | 2022 | Oct | [arXiv](https://arxiv.org/abs/2210.11427) |
| InstructPix2Pix: Learning to Follow Image Editing Instructions | 2022 | Nov | [arXiv](https://arxiv.org/abs/2211.09800) |
| Pix2Pix Zero: Zero-Shot Image-to-Image Translation | 2023 | Feb | [arXiv](https://arxiv.org/abs/2302.03027) |
| StableDiffusionXLImg2ImgPipeline | 2023 | Jul | [arXiv](https://arxiv.org/abs/2307.01952) |

### Inpainting & Outpainting

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Blended Diffusion for Text-driven Editing of Natural Images | 2021 | Nov | [arXiv](https://arxiv.org/abs/2111.14818) |
| Repaint: Inpainting using Denoising Diffusion Probabilistic Models | 2022 | Jan | [arXiv](https://arxiv.org/abs/2201.09865) |
| Blended Latent Diffusion | 2022 | Jun | [arXiv](https://arxiv.org/abs/2206.02779) |
| StableDiffusionInpaintPipeline | 2022 | — | [arXiv](https://arxiv.org/abs/2112.10752) |
| Paint by Example: Exemplar-based Image Editing with Diffusion Models | 2022 | Nov | [arXiv](https://arxiv.org/abs/2211.13227) |
| StableDiffusionXLInpaintPipeline | 2023 | Jul | [arXiv](https://arxiv.org/abs/2307.01952) |
| HD-Painter: High-Resolution and Prompt-Faithful Text-Guided Image Inpainting | 2023 | Dec | [arXiv](https://arxiv.org/abs/2312.14091) |

### Video Generation

| Paper | Year | Month | Link |
|-------|------|-------|------|
| AnimateDiff: Animate Your Personalized T2I (AnimateDiffPipeline) | 2023 | Jul | [arXiv](https://arxiv.org/abs/2307.04725) |
| ModelScope Text-to-Video (TextToVideoSDPipeline) | 2023 | Aug | [arXiv](https://arxiv.org/abs/2308.06571) |
| Stable Video Diffusion (StableVideoDiffusionPipeline) | 2023 | Nov | [arXiv](https://arxiv.org/abs/2311.15127) |
| Latte: Latent Diffusion Transformer for Videos (LattePipeline) | 2024 | Jan | [arXiv](https://arxiv.org/abs/2401.03048) |
| CogVideoX (CogVideoXPipeline / CogVideoXImageToVideoPipeline) | 2024 | Aug | [arXiv](https://arxiv.org/abs/2408.06072) |
| Mochi 1 (MochiPipeline) | 2024 | Oct | [Blog](https://www.genmo.ai/blog/mochi-1) |
| Allegro (AllegroPipeline) | 2024 | Oct | [arXiv](https://arxiv.org/abs/2410.15458) |
| LTX-Video (LTXPipeline / LTXImageToVideoPipeline) | 2024 | Nov | [arXiv](https://arxiv.org/abs/2501.00103) |
| HunyuanVideo (HunyuanVideoPipeline) | 2024 | Dec | [arXiv](https://arxiv.org/abs/2412.03603) |
| Wan Video (WanPipeline) | 2025 | Mar | [arXiv](https://arxiv.org/abs/2503.20314) |

### Controlled Generation

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Attend-and-Excite: Attention-Based Semantic Guidance | 2023 | Jan | [arXiv](https://arxiv.org/abs/2301.13826) |
| GLIGEN: Open-Set Grounded Text-to-Image Generation | 2023 | Jan | [arXiv](https://arxiv.org/abs/2301.07093) |
| ControlNet: Adding Conditional Control to Text-to-Image Diffusion | 2023 | Feb | [arXiv](https://arxiv.org/abs/2302.05543) |
| T2I-Adapter: Learning Adapters to Dig out More Controllable Ability | 2023 | Feb | [arXiv](https://arxiv.org/abs/2302.08453) |
| IP-Adapter: Text Compatible Image Prompt Adapter | 2023 | Aug | [arXiv](https://arxiv.org/abs/2308.06721) |
| MultiControlNet (Multiple ControlNets in parallel) | 2023 | — | [Docs](https://huggingface.co/docs/diffusers/using-diffusers/controlnet) |
| ControlNet-XS: Lightweight ControlNet | 2023 | Dec | [arXiv](https://arxiv.org/abs/2312.06573) |

### Panorama & Special

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Self-Attention Guidance (StableDiffusionSAGPipeline) | 2022 | Oct | [arXiv](https://arxiv.org/abs/2210.00939) |
| DiffEdit (StableDiffusionDiffEditPipeline) | 2022 | Oct | [arXiv](https://arxiv.org/abs/2210.11427) |
| MultiDiffusion: Fusing Diffusion Paths (StableDiffusionPanoramaPipeline) | 2023 | Feb | [arXiv](https://arxiv.org/abs/2302.08113) |
| LDM3D: Depth + Image Generation (StableDiffusionLDM3DPipeline) | 2023 | May | [arXiv](https://arxiv.org/abs/2305.10853) |
| Latent Consistency Models (LatentConsistencyModelPipeline) | 2023 | Oct | [arXiv](https://arxiv.org/abs/2310.04378) |
| StableDiffusionLatentUpscalePipeline | 2022 | — | [Docs](https://huggingface.co/docs/diffusers/api/pipelines/stable_diffusion/latent_upscale) |

### Audio Generation

| Paper | Year | Month | Link |
|-------|------|-------|------|
| AudioLDM: Text-to-Audio Generation with Latent Diffusion Models | 2023 | Jan | [arXiv](https://arxiv.org/abs/2301.12503) |
| MusicLDM: Enhancing Novelty in Text-to-Music Generation | 2023 | Aug | [arXiv](https://arxiv.org/abs/2308.01546) |
| AudioLDM 2: Learning Holistic Audio Generation | 2023 | Aug | [arXiv](https://arxiv.org/abs/2308.05734) |
| Stable Audio Open: Real-time Long-form Audio Generation | 2024 | Jul | [arXiv](https://arxiv.org/abs/2407.14358) |
| Dance Diffusion (Unconditional Audio) | 2022 | — | [Docs](https://huggingface.co/docs/diffusers/api/pipelines/dance_diffusion) |

### 3D Generation

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Zero-1-to-3: Zero-shot One Image to 3D Object | 2023 | Mar | [arXiv](https://arxiv.org/abs/2303.11328) |
| Shap-E: Generating Conditional 3D Implicit Functions | 2023 | May | [arXiv](https://arxiv.org/abs/2305.02463) |

---

## 05 Modular Pipelines

### Core Blocks

| Component | Role | Link |
|-----------|------|------|
| TextEncoderStep | Encode text prompt to embeddings | [Docs](https://huggingface.co/docs/diffusers/api/modular_pipelines) |
| DenoiseStep | Run the diffusion denoising loop | [Docs](https://huggingface.co/docs/diffusers/api/modular_pipelines) |
| DecodeStep | Decode latents to pixel space via VAE | [Docs](https://huggingface.co/docs/diffusers/api/modular_pipelines) |
| SchedulerStep | Configure timesteps and noise levels | [Docs](https://huggingface.co/docs/diffusers/api/modular_pipelines) |
| PrepareLatentsStep | Initialize or prepare latent tensors | [Docs](https://huggingface.co/docs/diffusers/api/modular_pipelines) |
| ImageEncoderStep | Encode images for IP-Adapter / img2img | [Docs](https://huggingface.co/docs/diffusers/api/modular_pipelines) |

### Composition Patterns

| Component | Role | Link |
|-----------|------|------|
| SequentialPipelineBlocks | Run blocks in sequence | [Docs](https://huggingface.co/docs/diffusers/api/modular_pipelines) |
| ModularPipeline | Base class for composable pipelines | [Docs](https://huggingface.co/docs/diffusers/api/modular_pipelines) |
| PipelineBlock | Base class for pipeline blocks | [Docs](https://huggingface.co/docs/diffusers/api/modular_pipelines) |
| AutoPipelineForText2Image | Auto model routing for text-to-image | [Docs](https://huggingface.co/docs/diffusers/api/pipelines/auto_pipeline) |
| AutoPipelineForImage2Image | Auto model routing for img2img | [Docs](https://huggingface.co/docs/diffusers/api/pipelines/auto_pipeline) |
| AutoPipelineForInpainting | Auto model routing for inpainting | [Docs](https://huggingface.co/docs/diffusers/api/pipelines/auto_pipeline) |

---

## 06 Loaders

### Model Loading

| Method | Role | Link |
|--------|------|------|
| DiffusionPipeline.from_pretrained | Load from HuggingFace Hub | [Docs](https://huggingface.co/docs/diffusers/api/loaders/loading) |
| from_single_file | Load from .safetensors / .ckpt checkpoint | [Docs](https://huggingface.co/docs/diffusers/using-diffusers/other-formats) |
| ModelMixin.from_pretrained | Component-level loading | [Docs](https://huggingface.co/docs/diffusers/api/models/overview) |
| Safetensors format | Simple and fast model sharing format | [Docs](https://huggingface.co/docs/safetensors) |
| ONNX Runtime Loading | ONNX export and inference | [Docs](https://huggingface.co/docs/diffusers/optimization/onnx) |

### LoRA Adapters

| Paper | Year | Month | Link |
|-------|------|-------|------|
| LoRA: Low-Rank Adaptation of Large Language Models | 2021 | Jun | [arXiv](https://arxiv.org/abs/2106.09685) |
| PEFT: Parameter-Efficient Fine-Tuning Library | 2023 | — | [GitHub](https://github.com/huggingface/peft) |
| LyCORIS: Lora beyond Conventional Methods (LoHa, LoKr, etc.) | 2023 | Sep | [arXiv](https://arxiv.org/abs/2309.14859) |
| DoRA: Weight-Decomposed Low-Rank Adaptation | 2024 | Feb | [arXiv](https://arxiv.org/abs/2402.09353) |
| load_lora_weights / fuse_lora / set_adapters | — | — | [Docs](https://huggingface.co/docs/diffusers/using-diffusers/loading_adapters) |
| LoRA Merging and Composition | — | — | [Docs](https://huggingface.co/docs/diffusers/using-diffusers/merge_loras) |

### Textual Inversion

| Paper | Year | Month | Link |
|-------|------|-------|------|
| An Image is Worth One Word: Personalizing T2I with Textual Inversion | 2022 | Aug | [arXiv](https://arxiv.org/abs/2208.01618) |
| load_textual_inversion (Custom embeddings) | — | — | [Docs](https://huggingface.co/docs/diffusers/using-diffusers/loading_adapters) |

### IP-Adapter Loading

| Paper | Year | Month | Link |
|-------|------|-------|------|
| IP-Adapter: Text Compatible Image Prompt Adapter | 2023 | Aug | [arXiv](https://arxiv.org/abs/2308.06721) |
| load_ip_adapter / IP-Adapter Plus / IP-Adapter FaceID | — | — | [Docs](https://huggingface.co/docs/diffusers/using-diffusers/ip_adapter) |

---

## 07 Quantizers

### Weight Quantization

| Paper | Year | Month | Link |
|-------|------|-------|------|
| LLM.int8(): 8-bit Matrix Multiplication (bitsandbytes) | 2022 | Aug | [arXiv](https://arxiv.org/abs/2208.07339) |
| GPTQ: Accurate Post-Training Quantization for Generative Pre-Trained Transformers | 2022 | Oct | [arXiv](https://arxiv.org/abs/2210.17323) |
| QLoRA: Efficient Finetuning of Quantized LLMs (NF4) | 2023 | May | [arXiv](https://arxiv.org/abs/2305.14314) |
| AWQ: Activation-aware Weight Quantization for LLM Compression | 2023 | Jun | [arXiv](https://arxiv.org/abs/2306.00978) |
| GGUF Format (llama.cpp compatible) | 2023 | — | [GitHub](https://github.com/ggerganov/ggml) |
| TorchAO: PyTorch Architecture Optimization | 2024 | — | [GitHub](https://github.com/pytorch/ao) |
| Quanto (HuggingFace Quantization) | 2024 | — | [GitHub](https://github.com/huggingface/optimum-quanto) |

### Inference Optimization

| Paper / Tool | Year | Link |
|-------------|------|------|
| FP8 Dynamic Quantization (E4M3 / E5M2) | 2024 | [Docs](https://huggingface.co/docs/diffusers/quantization/torchao) |
| torch.compile: PyTorch 2.0 Compiler | 2023 | [Docs](https://huggingface.co/docs/diffusers/optimization/torch2.0) |
| DeepCache: Accelerating Diffusion via Feature Caching | 2023 | [arXiv](https://arxiv.org/abs/2312.00858) |
| Token Merging (ToMe) for Fast Stable Diffusion | 2023 | [arXiv](https://arxiv.org/abs/2303.17604) |
| TensorRT Acceleration | — | [Docs](https://huggingface.co/docs/diffusers/optimization/tensorrt) |
| ONNX Runtime Optimization | — | [Docs](https://huggingface.co/docs/diffusers/optimization/onnx) |
| OpenVINO Inference Optimization | — | [Docs](https://huggingface.co/docs/diffusers/optimization/open_vino) |
| Core ML / Apple Silicon Optimization | — | [Docs](https://huggingface.co/docs/diffusers/optimization/coreml) |

---

## 08 Hooks

### Memory Management

| Hook | Role | Link |
|------|------|------|
| enable_sequential_cpu_offload | Layer-by-layer GPU/CPU offload | [Docs](https://huggingface.co/docs/diffusers/optimization/memory) |
| enable_model_cpu_offload | Full model offload between steps | [Docs](https://huggingface.co/docs/diffusers/optimization/memory) |
| enable_group_offload | Block-level GPU/CPU swap | [Docs](https://huggingface.co/docs/diffusers/optimization/memory) |
| enable_attention_slicing | Chunked attention computation | [Docs](https://huggingface.co/docs/diffusers/optimization/memory) |
| enable_vae_slicing | Batch decode in memory-efficient slices | [Docs](https://huggingface.co/docs/diffusers/optimization/memory) |
| enable_vae_tiling | Tile-based VAE decode for large images | [Docs](https://huggingface.co/docs/diffusers/optimization/memory) |
| Gradient Checkpointing | Trade compute for memory in training | [Docs](https://huggingface.co/docs/diffusers/optimization/memory) |

### Speed Optimization

| Paper / Hook | Year | Link |
|-------------|------|------|
| Pyramid Attention Broadcast (PAB) | 2024 | [arXiv](https://arxiv.org/abs/2408.12588) |
| First Block Cache (FBCache) | — | [Docs](https://huggingface.co/docs/diffusers/optimization/cache) |
| Token Merging (ToMe) Hooks | 2023 | [arXiv](https://arxiv.org/abs/2303.17604) |
| FP8 LayerWise Hooks | — | [Docs](https://huggingface.co/docs/diffusers/optimization/memory) |
| SDP Attention (Scaled Dot Product Attention) | — | [PyTorch](https://pytorch.org/docs/stable/generated/torch.nn.functional.scaled_dot_product_attention.html) |
| enable_xformers_memory_efficient_attention | — | [Docs](https://huggingface.co/docs/diffusers/optimization/xformers) |
| Layer Skipping Hooks | — | [Docs](https://huggingface.co/docs/diffusers/optimization/memory) |

---

## 09 Processing

### Image Processing

| Component | Role | Link |
|-----------|------|------|
| VaeImageProcessor | PIL / Tensor / NumPy conversion | [Docs](https://huggingface.co/docs/diffusers/api/image_processor) |
| Image Normalization | [-1,1] / [0,1] / [0,255] conversion | [Docs](https://huggingface.co/docs/diffusers/api/image_processor) |
| Mask Processing | Binary/grayscale masks for inpainting | [Docs](https://huggingface.co/docs/diffusers/api/image_processor) |
| Depth Map Processing | MiDaS / DPT depth estimation | [Docs](https://huggingface.co/docs/diffusers/api/image_processor) |
| ControlNet Preprocessing | Canny, OpenPose, Depth, Normal, etc. | [Docs](https://huggingface.co/docs/diffusers/using-diffusers/controlnet) |
| IPAdapterMaskProcessor | Regional IP-Adapter masks | [Docs](https://huggingface.co/docs/diffusers/using-diffusers/ip_adapter) |

### Video Processing

| Component | Role | Link |
|-----------|------|------|
| VideoProcessor | Frame extraction and batching | [Docs](https://huggingface.co/docs/diffusers/api/video_processor) |
| export_to_gif | GIF export utility | [Docs](https://huggingface.co/docs/diffusers/api/utilities) |
| export_to_video | MP4 export utility | [Docs](https://huggingface.co/docs/diffusers/api/utilities) |

### Callbacks

| Component | Role | Link |
|-----------|------|------|
| PipelineCallback | Step-level hooks during generation | [Docs](https://huggingface.co/docs/diffusers/using-diffusers/callback) |
| MultiPipelineCallbacks | Compose multiple callbacks | [Docs](https://huggingface.co/docs/diffusers/using-diffusers/callback) |
| Latent Preview Callback | Real-time denoising visualization | [Docs](https://huggingface.co/docs/diffusers/using-diffusers/callback) |
| SDXLCFGCutoffCallback | Stop CFG at a certain step | [Docs](https://huggingface.co/docs/diffusers/using-diffusers/callback) |
| Interrupt Callback | Early stopping support | [Docs](https://huggingface.co/docs/diffusers/using-diffusers/callback) |

---

## 10 Training

### Optimizers & LR Schedules

| Schedule | Role | Link |
|----------|------|------|
| Constant LR with Warmup | Fixed LR after linear warmup | [Docs](https://huggingface.co/docs/diffusers/api/optimization) |
| Cosine Annealing Schedule | Cosine decay from peak to zero | [Docs](https://huggingface.co/docs/diffusers/api/optimization) |
| Cosine Annealing with Restarts | Cosine with periodic warm restarts | [Docs](https://huggingface.co/docs/diffusers/api/optimization) |
| Linear Warmup + Linear Decay | Linear ramp-up then linear decay | [Docs](https://huggingface.co/docs/diffusers/api/optimization) |
| Polynomial Decay Schedule | Polynomial LR decay | [Docs](https://huggingface.co/docs/diffusers/api/optimization) |
| AdamW Optimizer | Default optimizer for diffusion training | [PyTorch](https://pytorch.org/docs/stable/generated/torch.optim.AdamW.html) |
| Prodigy Optimizer (Adaptive LR) | 2023 | [arXiv](https://arxiv.org/abs/2306.06101) |
| 8-bit Adam (bitsandbytes) | 2022 | [arXiv](https://arxiv.org/abs/2110.02861) |

### Training Utilities

| Paper / Utility | Year | Link |
|----------------|------|------|
| EMAModel (Exponential Moving Average of weights) | — | [Docs](https://huggingface.co/docs/diffusers/api/training) |
| Min-SNR Weighting: Efficient Diffusion Training via Signal-to-Noise Ratio | 2023 | [arXiv](https://arxiv.org/abs/2303.09556) |
| Noise Offset (Better dark/light image generation) | — | [Blog](https://www.crosslabs.org/blog/diffusion-with-offset-noise) |
| Input Perturbation (Improved training stability) | 2023 | [arXiv](https://arxiv.org/abs/2301.11706) |
| Prior Preservation Loss (DreamBooth regularization) | 2022 | [arXiv](https://arxiv.org/abs/2208.12242) |
| Mixed Precision Training (FP16 / BF16) | — | [Docs](https://huggingface.co/docs/diffusers/training/overview) |
| Gradient Accumulation | — | [Docs](https://huggingface.co/docs/accelerate/usage_guides/gradient_accumulation) |

### Fine-tuning Methods

| Paper | Year | Month | Link |
|-------|------|-------|------|
| An Image is Worth One Word: Textual Inversion | 2022 | Aug | [arXiv](https://arxiv.org/abs/2208.01618) |
| DreamBooth: Fine Tuning Text-to-Image Diffusion for Subject-Driven Generation | 2022 | Aug | [arXiv](https://arxiv.org/abs/2208.12242) |
| Multi-Concept Customization of Text-to-Image Diffusion (Custom Diffusion) | 2022 | Dec | [arXiv](https://arxiv.org/abs/2212.04488) |
| LoRA Training for Stable Diffusion | — | — | [Docs](https://huggingface.co/docs/diffusers/training/lora) |
| DreamBooth with LoRA | — | — | [Docs](https://huggingface.co/docs/diffusers/training/dreambooth) |
| ControlNet Training | — | — | [Docs](https://huggingface.co/docs/diffusers/training/controlnet) |
| T2I-Adapter Training | — | — | [Docs](https://huggingface.co/docs/diffusers/training/t2i_adapters) |
| InstructPix2Pix Training | — | — | [Docs](https://huggingface.co/docs/diffusers/training/instructpix2pix) |
| SDXL Fine-tuning | — | — | [Docs](https://huggingface.co/docs/diffusers/training/sdxl) |

### Advanced Training

| Paper | Year | Month | Link |
|-------|------|-------|------|
| Training Diffusion Models with Reinforcement Learning (DDPO) | 2023 | May | [arXiv](https://arxiv.org/abs/2305.13301) |
| DRaFT: Differentiable Reward Fine-Tuning for Diffusion | 2023 | Sep | [arXiv](https://arxiv.org/abs/2309.17400) |
| LCM-LoRA: A Universal Stable-Diffusion Acceleration Module | 2023 | Nov | [arXiv](https://arxiv.org/abs/2311.05556) |
| Accelerate: Multi-GPU / TPU Training Library | — | — | [Docs](https://huggingface.co/docs/accelerate) |
| DeepSpeed ZeRO Integration | — | — | [Docs](https://huggingface.co/docs/accelerate/usage_guides/deepspeed) |

---

## 11 Utilities

### Configuration

| Component | Role | Link |
|-----------|------|------|
| ConfigMixin | JSON-based model config save/load | [Docs](https://huggingface.co/docs/diffusers/api/configuration) |
| register_to_config | Auto-serialization decorator | [Docs](https://huggingface.co/docs/diffusers/api/configuration) |
| FrozenDict | Immutable configuration dictionaries | [Docs](https://huggingface.co/docs/diffusers/api/configuration) |
| model_index.json | Pipeline component registry | [Docs](https://huggingface.co/docs/diffusers/api/configuration) |
| scheduler_config.json | Scheduler parameters file | [Docs](https://huggingface.co/docs/diffusers/api/configuration) |

### Device & Runtime

| Component | Role | Link |
|-----------|------|------|
| CUDA / MPS / XPU / NPU Detection | Multi-device support | [Docs](https://huggingface.co/docs/diffusers/optimization/torch2.0) |
| torch.compile Integration | Inductor compiler backend | [Docs](https://huggingface.co/docs/diffusers/optimization/torch2.0) |
| Mixed Precision (FP16 / BF16 / FP8) | Reduced precision inference | [Docs](https://huggingface.co/docs/diffusers/optimization/fp16) |
| Scaled Dot Product Attention (SDPA) | PyTorch 2.0 native attention | [Docs](https://huggingface.co/docs/diffusers/optimization/torch2.0) |
| xFormers Memory-Efficient Attention | Efficient attention kernels | [Docs](https://huggingface.co/docs/diffusers/optimization/xformers) |
| Deterministic Generation | Generator seed control | [Docs](https://huggingface.co/docs/diffusers/using-diffusers/reusing_seeds) |

### CLI Commands

| Command | Role | Link |
|---------|------|------|
| diffusers-cli env | Print environment info | [Docs](https://huggingface.co/docs/diffusers/api/utilities) |
| diffusers-cli fp16_safetensors | Convert weights to FP16 safetensors | [Docs](https://huggingface.co/docs/diffusers/api/utilities) |
| huggingface-cli login/download | Hub authentication and downloads | [Docs](https://huggingface.co/docs/huggingface_hub/guides/cli) |

### Experimental

| Paper | Year | Month | Link |
|-------|------|-------|------|
| DDPO / DRaFT: RL for Diffusion Models | 2023 | May | [arXiv](https://arxiv.org/abs/2305.13301) |
| FreeInit: Bridging Initialization Gap in Video Diffusion Models | 2023 | Dec | [arXiv](https://arxiv.org/abs/2312.07537) |
| FreeNoise: Tuning-Free Longer Video Diffusion via Noise Rescheduling | 2024 | Oct | [arXiv](https://arxiv.org/abs/2310.15169) |

---

## References (Continuously Updated)

### Survey Papers

| Paper | Topic | Year | Link |
|-------|-------|------|------|
| Denoising Diffusion Probabilistic Models | Foundational DDPM paper | 2020 | [arXiv](https://arxiv.org/abs/2006.11239) |
| Diffusion Models: A Comprehensive Survey of Methods and Applications | Complete diffusion survey | 2022 | [arXiv](https://arxiv.org/abs/2209.00796) |
| A Survey on Video Diffusion Models | Video generation survey | 2023 | [arXiv](https://arxiv.org/abs/2310.10647) |
| Diffusion Models for Image Restoration and Enhancement — A Comprehensive Survey | Image restoration with diffusion | 2023 | [arXiv](https://arxiv.org/abs/2308.09388) |
| State of the Art on Diffusion Models for Visual Computing | Visual computing diffusion survey | 2023 | [arXiv](https://arxiv.org/abs/2310.07204) |
| Efficient Diffusion Models for Vision: A Survey | Efficiency-focused survey | 2024 | [arXiv](https://arxiv.org/abs/2210.09292) |

### GitHub Curated Lists (Actively Maintained)

| Resource | Topic | Stars | Link |
|----------|-------|-------|------|
| Awesome-Diffusion-Models | Diffusion model papers across all modalities | 11k+ | [GitHub](https://github.com/diff-usion/Awesome-Diffusion-Models) |
| Awesome-Video-Diffusion | Video generation with diffusion models | 1k+ | [GitHub](https://github.com/ChenHsing/Awesome-Video-Diffusion-Models) |
| Awesome-Diffusion-Transformers | DiT, Flow Matching, and related papers | Active | [GitHub](https://github.com/ShoufaChen/Awesome-Diffusion-Transformers) |
| Awesome-ControlNet | ControlNet and controllable generation | Active | [GitHub](https://github.com/SUSPENDED/Awesome-ControlNet) |

### Official Resources & Blogs (Live Updates)

| Resource | Topic | Link |
|----------|-------|------|
| HuggingFace Diffusers Docs | Official API documentation | [Docs](https://huggingface.co/docs/diffusers) |
| HuggingFace Hub (Diffusers) | Browse diffusers models | [Hub](https://huggingface.co/models?library=diffusers) |
| HuggingFace Papers | Daily new ML paper submissions | [hf.co/papers](https://huggingface.co/papers) |
| Papers With Code | Papers + benchmarks + code, auto-linked | [paperswithcode.com](https://paperswithcode.com/) |
| Stability AI Blog | Stable Diffusion updates | [stability.ai/blog](https://stability.ai/blog) |
| Black Forest Labs | FLUX model updates | [blackforestlabs.ai](https://blackforestlabs.ai/) |
| arXiv cs.CV | Computer vision latest preprints | [arxiv.org/list/cs.CV](https://arxiv.org/list/cs.CV/recent) |
| arXiv cs.LG | Machine learning latest preprints | [arxiv.org/list/cs.LG](https://arxiv.org/list/cs.LG/recent) |

### Leaderboards & Benchmarks (Real-Time)

| Resource | Topic | Link |
|----------|-------|------|
| Open Diffusion Leaderboard | Open-source diffusion model rankings | [hf.co/spaces](https://huggingface.co/spaces) |
| Artificial Analysis Text-to-Image | T2I model speed and quality comparison | [artificialanalysis.ai](https://artificialanalysis.ai/text-to-image) |
| Papers With Code SOTA | State-of-the-art results by task | [paperswithcode.com/sota](https://paperswithcode.com/sota) |

---

## Contributing

Feel free to open issues or pull requests to add new papers or correct any information.

## Author

**Gaurav14cs17** — [GitHub](https://github.com/Gaurav14cs17)

## License

This project is licensed under the Apache-2.0 License.
