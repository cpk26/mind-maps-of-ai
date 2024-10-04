Search.setIndex({docnames:["_sources/architecture","_sources/architecture/CLIP","_sources/architecture/attention","_sources/architecture/mlp_mixer","_sources/architecture/positional_encoding","_sources/architecture/residual_blocks","_sources/architecture/sequence_model_archetypes","_sources/architecture/transformer_encoder","_sources/architecture/transformer_encoder_decoder","_sources/architecture/unet","_sources/beginning/ai_ethics","_sources/beginning/ai_research","_sources/beginning/foundational_math","_sources/beginning/history_2004","_sources/beginning/history_present","_sources/beginning/key_drivers_of_ai_progress","_sources/beginning/ml_is_different_than_software","_sources/beginning/ml_ops","_sources/beginning/ml_teams","_sources/beginning/project_workflow","_sources/beginning/prominent_ideas_in_ml","_sources/beginning/selecting_projects","_sources/beginning/training_nn","_sources/calculus","_sources/calculus/derivatives","_sources/calculus/langevin","_sources/calculus/laplacian","_sources/calculus/matrix_calculus","_sources/calculus/scalar_potential","_sources/calculus/vector_calculus","_sources/foundations","_sources/genai_image","_sources/generative/autoregressive_generative_model","_sources/generative/auxillary","_sources/generative/auxillary2","_sources/generative/comparison","_sources/generative/diffusion","_sources/generative/diffusion2","_sources/generative/gans","_sources/generative/inversion_by_direct_iteration","_sources/generative/normalizing_flows","_sources/generative/overview","_sources/generative/variational_autoencoder","_sources/gpu_perf","_sources/intro","_sources/math_optim","_sources/optimization/2nd_order_opt","_sources/optimization/AD_in_dl_frameworks","_sources/optimization/autodiff","_sources/optimization/backprop_equations","_sources/optimization/convex_functions","_sources/optimization/cpu","_sources/optimization/differentiating_functionals","_sources/optimization/dl_optim_alg","_sources/optimization/gpu","_sources/optimization/gpu_programming","_sources/optimization/gradient_descent","_sources/optimization/improving_model_perf","_sources/optimization/parallelism","_sources/optimization/performance_antipatterns","_sources/radiance","_sources/radiance/3DGS","_sources/radiance/epipolar_geometry","_sources/radiance/geometric_optics","_sources/radiance/nerf","_sources/radiance/pinhole","_sources/radiance/projection_matrix","_sources/radiance/radiance_field","_sources/radiance/rotations","_sources/radiance/sfm","_sources/radiance/volume_rendering","_sources/software","_sources/software/docker","_sources/software/pytorch","_sources/software/pytorch_lightning","_sources/statistics","_sources/statistics/central_limit_theorem","_sources/statistics/entropy","_sources/statistics/kl_divergence","_sources/statistics/mle","architecture","architecture/CLIP","architecture/attention","architecture/fpn","architecture/mlp_mixer","architecture/positional_encoding","architecture/residual_blocks","architecture/rnn","architecture/sequence_model_archetypes","architecture/transformer_encoder","architecture/transformer_encoder_decoder","architecture/unet","beginning/ai_ethics","beginning/ai_research","beginning/foundational_math","beginning/history_2004","beginning/history_present","beginning/key_drivers_of_ai_progress","beginning/ml_is_different_than_software","beginning/ml_ops","beginning/ml_teams","beginning/project_workflow","beginning/prominent_ideas_in_ml","beginning/selecting_projects","beginning/training_nn","calculus","calculus/derivatives","calculus/langevin","calculus/laplacian","calculus/matrix_calculus","calculus/scalar_potential","calculus/vector_calculus","components","components/activation_functions","components/classification_losses","components/convolutions","components/data_leakage","components/focal_loss","components/normalization","components/pooling","components/regression_losses","components/regularization","components/sparsemax","components/weight_initialization","foundations","genai_image","generative/autoregressive_generative_model","generative/auxillary","generative/auxillary2","generative/comparison","generative/diffusion","generative/diffusion2","generative/gans","generative/inversion_by_direct_iteration","generative/normalizing_flows","generative/overview","generative/variational_autoencoder","gpu_perf","intro","math_optim","optimization/2nd_order_opt","optimization/AD_in_dl_frameworks","optimization/autodiff","optimization/backprop_equations","optimization/convex_functions","optimization/cpu","optimization/differentiating_functionals","optimization/dl_optim_alg","optimization/gpu","optimization/gpu_programming","optimization/gradient_descent","optimization/improving_model_perf","optimization/parallelism","optimization/performance_antipatterns","radiance","radiance/3DGS","radiance/epipolar_geometry","radiance/geometric_optics","radiance/nerf","radiance/pinhole","radiance/projection_matrix","radiance/radiance_field","radiance/rotations","radiance/sfm","radiance/volume_rendering","software","software/docker","software/pytorch","software/pytorch_lightning","statistics","statistics/central_limit_theorem","statistics/entropy","statistics/kl_divergence","statistics/mle"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinxcontrib.bibtex":9,sphinx:56},filenames:["_sources/architecture.md","_sources/architecture/CLIP.md","_sources/architecture/attention.md","_sources/architecture/mlp_mixer.md","_sources/architecture/positional_encoding.md","_sources/architecture/residual_blocks.md","_sources/architecture/sequence_model_archetypes.md","_sources/architecture/transformer_encoder.md","_sources/architecture/transformer_encoder_decoder.md","_sources/architecture/unet.md","_sources/beginning/ai_ethics.md","_sources/beginning/ai_research.md","_sources/beginning/foundational_math.md","_sources/beginning/history_2004.md","_sources/beginning/history_present.md","_sources/beginning/key_drivers_of_ai_progress.md","_sources/beginning/ml_is_different_than_software.md","_sources/beginning/ml_ops.md","_sources/beginning/ml_teams.md","_sources/beginning/project_workflow.md","_sources/beginning/prominent_ideas_in_ml.md","_sources/beginning/selecting_projects.md","_sources/beginning/training_nn.md","_sources/calculus.md","_sources/calculus/derivatives.md","_sources/calculus/langevin.md","_sources/calculus/laplacian.md","_sources/calculus/matrix_calculus.md","_sources/calculus/scalar_potential.md","_sources/calculus/vector_calculus.md","_sources/foundations.md","_sources/genai_image.md","_sources/generative/autoregressive_generative_model.md","_sources/generative/auxillary.md","_sources/generative/auxillary2.md","_sources/generative/comparison.md","_sources/generative/diffusion.md","_sources/generative/diffusion2.md","_sources/generative/gans.md","_sources/generative/inversion_by_direct_iteration.md","_sources/generative/normalizing_flows.md","_sources/generative/overview.md","_sources/generative/variational_autoencoder.md","_sources/gpu_perf.md","_sources/intro.md","_sources/math_optim.md","_sources/optimization/2nd_order_opt.md","_sources/optimization/AD_in_dl_frameworks.md","_sources/optimization/autodiff.md","_sources/optimization/backprop_equations.md","_sources/optimization/convex_functions.md","_sources/optimization/cpu.md","_sources/optimization/differentiating_functionals.md","_sources/optimization/dl_optim_alg.md","_sources/optimization/gpu.md","_sources/optimization/gpu_programming.md","_sources/optimization/gradient_descent.md","_sources/optimization/improving_model_perf.md","_sources/optimization/parallelism.md","_sources/optimization/performance_antipatterns.md","_sources/radiance.md","_sources/radiance/3DGS.md","_sources/radiance/epipolar_geometry.md","_sources/radiance/geometric_optics.md","_sources/radiance/nerf.md","_sources/radiance/pinhole.md","_sources/radiance/projection_matrix.md","_sources/radiance/radiance_field.md","_sources/radiance/rotations.md","_sources/radiance/sfm.md","_sources/radiance/volume_rendering.md","_sources/software.md","_sources/software/docker.md","_sources/software/pytorch.md","_sources/software/pytorch_lightning.md","_sources/statistics.md","_sources/statistics/central_limit_theorem.md","_sources/statistics/entropy.md","_sources/statistics/kl_divergence.md","_sources/statistics/mle.md","architecture.md","architecture/CLIP.md","architecture/attention.md","architecture/fpn.md","architecture/mlp_mixer.md","architecture/positional_encoding.md","architecture/residual_blocks.md","architecture/rnn.md","architecture/sequence_model_archetypes.md","architecture/transformer_encoder.md","architecture/transformer_encoder_decoder.md","architecture/unet.md","beginning/ai_ethics.md","beginning/ai_research.md","beginning/foundational_math.md","beginning/history_2004.md","beginning/history_present.md","beginning/key_drivers_of_ai_progress.md","beginning/ml_is_different_than_software.md","beginning/ml_ops.md","beginning/ml_teams.md","beginning/project_workflow.md","beginning/prominent_ideas_in_ml.md","beginning/selecting_projects.md","beginning/training_nn.md","calculus.md","calculus/derivatives.md","calculus/langevin.md","calculus/laplacian.md","calculus/matrix_calculus.md","calculus/scalar_potential.md","calculus/vector_calculus.md","components.md","components/activation_functions.md","components/classification_losses.md","components/convolutions.md","components/data_leakage.md","components/focal_loss.md","components/normalization.md","components/pooling.md","components/regression_losses.md","components/regularization.md","components/sparsemax.md","components/weight_initialization.md","foundations.md","genai_image.md","generative/autoregressive_generative_model.md","generative/auxillary.md","generative/auxillary2.md","generative/comparison.md","generative/diffusion.md","generative/diffusion2.md","generative/gans.md","generative/inversion_by_direct_iteration.md","generative/normalizing_flows.md","generative/overview.md","generative/variational_autoencoder.md","gpu_perf.md","intro.md","math_optim.md","optimization/2nd_order_opt.md","optimization/AD_in_dl_frameworks.md","optimization/autodiff.md","optimization/backprop_equations.md","optimization/convex_functions.md","optimization/cpu.md","optimization/differentiating_functionals.md","optimization/dl_optim_alg.md","optimization/gpu.md","optimization/gpu_programming.md","optimization/gradient_descent.md","optimization/improving_model_perf.md","optimization/parallelism.md","optimization/performance_antipatterns.md","radiance.md","radiance/3DGS.md","radiance/epipolar_geometry.md","radiance/geometric_optics.md","radiance/nerf.md","radiance/pinhole.md","radiance/projection_matrix.md","radiance/radiance_field.md","radiance/rotations.md","radiance/sfm.md","radiance/volume_rendering.md","software.md","software/docker.md","software/pytorch.md","software/pytorch_lightning.md","statistics.md","statistics/central_limit_theorem.md","statistics/entropy.md","statistics/kl_divergence.md","statistics/mle.md"],objects:{},objnames:{},objtypes:{},terms:{"3d":138,architectur:138,calculu:138,compon:138,cuda:138,foundat:138,gener:138,gpu:138,imag:138,mathemat:138,method:138,optim:138,perform:138,radianc:138,softwar:138,statist:138},titles:["Architecture","CLIP","Attention","MLP Mixer","Positional Encoding","Residual Blocks","Sequence Model Archetypes","Transformer Encoder","Transformer Encoder Decoder","UNet","AI Ethics","AI Research","Foundational Math","History: Up until early 2000\u2019s","History: Early 2000\u2019s to present","Key Drivers of AI Progress","Machine Learning is different than software","Machine Learning Ops","Machine Learning Team","Project Workflow","Prominent Ideas in ML","Selecting Projects","Training Neural Networks","Calculus","Derivatives","Langevin","Derivatives","Matrix Calculus","Scalar Potential","Vector Calculus","Foundations","Generative AI (Images)","Autoregressive Generative Models","Diffiusion Auxillary 1","Diffiusion Auxillary 2","Comparison Table","Diffusion Overview","Diffusion Overview Alternative","Generative Adversarial Networks","Inversion by direct iteration","Normalizing Flows","Overview","Variational Autoencoder","GPU, CUDA, and Performance","Introduction: Mind Maps of AI","Mathematical Optimization","Second Order Optimization","Automatic Differentiation in DL Frameworks","Automatic Differentiation","Backpropogation Equations","Convex Functions","CPU","Differentiating Functionals","Deep Learning Optimization Algorithms","GPU","GPU Programming","Gradient Descent","Improving Model Performance","Parallelism","Performance Antipatterns","3D and Radiance Methods","Gaussian Splatting","Epipolar Geometry","Geometric Optics","Neural Radiance Fields","Pinhole Camera Model","Projection Matrix","Radiance Fields","Rotation","Structure from Motion","Volume Rendering","Software","Docker","PyTorch","PyTorch Lightning","Statistics","Central Limit Theorem","Entropy","Kullback-Leibler Divergence","Maximum Likelihood Estimation","Architecture","CLIP","Attention","Feature Pyramid Networks","MLP Mixer","Positional Encoding","Residual Blocks","Recurrent Neural Networks (RNNs)","Sequence Model Archetypes","Transformer Encoder","Transformer Encoder Decoder","UNet","AI Ethics","AI Research","Foundational Math","History: Up until early 2000\u2019s","History: Early 2000\u2019s to present","Key Drivers of AI Progress","Machine Learning is different than software","Machine Learning Ops","Machine Learning Team","Project Workflow","Prominent Ideas in ML","Selecting Projects","Training Neural Networks","Calculus","Derivatives","Langevin","Derivatives","Matrix Calculus","Scalar Potential","Vector Calculus","Components","Activation Functions","Classification Losses","Convolutions","Data Leakage","Focal Loss","Normalization","Pooling","Regression Losses","Regularization","Sparsemax","Weight Initialization","Foundations","Generative AI (Images)","Autoregressive Generative Models","Diffiusion Auxillary 1","Diffiusion Auxillary 2","Comparison Table","Diffusion Overview","Diffusion Overview Alternative","Generative Adversarial Networks","Inversion by direct iteration","Normalizing Flows","Overview","Variational Autoencoder","GPU, CUDA, and Performance","Introduction: Mind Maps of AI","Mathematical Optimization","Second Order Optimization","Automatic Differentiation in DL Frameworks","Automatic Differentiation","Backpropogation Equations","Convex Functions","CPU","Differentiating Functionals","Deep Learning Optimization Algorithms","GPU","GPU Programming","Gradient Descent","Improving Model Performance","Parallelism","Performance Antipatterns","3D and Radiance Methods","Gaussian Splatting","Epipolar Geometry","Geometric Optics","Neural Radiance Fields","Pinhole Camera Model","Projection Matrix","Radiance Fields","Rotation","Structure from Motion","Volume Rendering","Software","Docker","PyTorch","PyTorch Lightning","Statistics","Central Limit Theorem","Entropy","Kullback-Leibler Divergence","Maximum Likelihood Estimation"],titleterms:{"1":[33,127],"2":[34,128],"2000":[13,14,95,96],"3d":[60,154],"function":[50,52,113,144,146],activ:113,adversari:[38,132],ai:[10,11,15,31,44,92,93,97,125,138],algorithm:[53,147],altern:[37,131],antipattern:[59,153],archetyp:[6,88],architectur:[0,80],attent:[2,82],autoencod:[42,136],automat:[47,48,141,142],autoregress:[32,126],auxillari:[33,34,127,128],backpropog:[49,143],block:[5,86],calculu:[23,27,29,105,109,111],camera:[65,159],central:[76,170],classif:114,clip:[1,81],comparison:[35,129],compon:112,convex:[50,144],convolut:115,cpu:[51,145],cuda:[43,137],data:116,decod:[8,90],deep:[53,147],deriv:[24,26,106,108],descent:[56,150],differ:[16,98],differenti:[47,48,52,141,142,146],diffius:[33,34,127,128],diffus:[36,37,130,131],direct:[39,133],diverg:[78,172],dl:[47,141],docker:[72,166],driver:[15,97],earli:[13,14,95,96],encod:[4,7,8,85,89,90],entropi:[77,171],epipolar:[62,156],equat:[49,143],estim:[79,173],ethic:[10,92],featur:83,field:[64,67,158,161],flow:[40,134],focal:117,foundat:[12,30,94,124],framework:[47,141],from:[69,163],gaussian:[61,155],gener:[31,32,38,125,126,132],geometr:[63,157],geometri:[62,156],gpu:[43,54,55,137,148,149],gradient:[56,150],histori:[13,14,95,96],idea:[20,102],imag:[31,125],improv:[57,151],initi:123,introduct:[44,138],invers:[39,133],iter:[39,133],kei:[15,97],kullback:[78,172],langevin:[25,107],leakag:116,learn:[16,17,18,53,98,99,100,147],leibler:[78,172],lightn:[74,168],likelihood:[79,173],limit:[76,170],loss:[114,117,120],machin:[16,17,18,98,99,100],map:[44,138],math:[12,94],mathemat:[45,139],matrix:[27,66,109,160],maximum:[79,173],method:[60,154],mind:[44,138],mixer:[3,84],ml:[20,102],mlp:[3,84],model:[6,32,57,65,88,126,151,159],motion:[69,163],network:[22,38,83,87,104,132],neural:[22,64,87,104,158],normal:[40,118,134],op:[17,99],optic:[63,157],optim:[45,46,53,139,140,147],order:[46,140],overview:[36,37,41,130,131,135],parallel:[58,152],perform:[43,57,59,137,151,153],pinhol:[65,159],pool:119,posit:[4,85],potenti:[28,110],present:[14,96],program:[55,149],progress:[15,97],project:[19,21,66,101,103,160],promin:[20,102],pyramid:83,pytorch:[73,74,167,168],radianc:[60,64,67,154,158,161],recurr:87,regress:120,regular:121,render:[70,164],research:[11,93],residu:[5,86],rnn:87,rotat:[68,162],s:[13,14,95,96],scalar:[28,110],second:[46,140],select:[21,103],sequenc:[6,88],softwar:[16,71,98,165],sparsemax:122,splat:[61,155],statist:[75,169],structur:[69,163],tabl:[35,129],team:[18,100],than:[16,98],theorem:[76,170],train:[22,104],transform:[7,8,89,90],unet:[9,91],until:[13,95],up:[13,95],variat:[42,136],vector:[29,111],volum:[70,164],weight:123,workflow:[19,101]}})